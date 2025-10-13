// /app/api/questions/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "../db";
import { ObjectId } from "mongodb";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const docs = await db.collection("questions").find({}).toArray();

    // (optional) stringify _id to be extra safe
    const questions = docs.map((d) => ({
      ...d,
      _id: d._id?.toString?.() ?? d._id,
    }));

    return NextResponse.json({ success: true, questions });
  } catch (error:unknown) {
    return NextResponse.json({ success: false, message: error }, { status: 500 });
  }
}


// export async function POST(req: Request) {
//     try {
//         const {db} = await connectToDatabase()
//         const data = await req.json();
        
        

//         let score = 0;

//         for (const [key, correct] of Object.entries(correctAnswers)) {
//             if (data.answers[key] === correct) {
//                 score++;
//             }
//         }

//         const passed = score >= 12;

//         await db.collection("examSubmissions").insertOne({
//             name: data.name,
//             email: data.email,
//             mobile: data.mobile,
//             batch: data.batch,
//             tutor: data.tutor,
//             answers: data.answers,
//             score,
//             passed,
//             submittedAt: new Date(),
//         });

//         return NextResponse.json({
//             success: true,
//             score,
//             passed,
//             submittedAt: new Date(),
//         });
//     } catch (err) {
//         console.error(err);
//         return NextResponse.json(
//             { success: false, error: "Server error" },
//             { status: 500 }
//         );
//     }
// }

// app/api/submit-exam/route.ts
// type AnswersObject = Record<string, string>; // { "<_id>": "opt2", ... }
// type AnswersArray = Array<{ questionId: string; selectedOptionId: string }>;

type SubmissionBody = {
  name: string;
  email: string;
  mobile?: string;
  batch?: string;
  tutor?: string;
  examId?: string; // optional: scope questions by exam
  // Map of question id -> selected option id
  answers: Record<string, string>;
};




// export async function POST(req: Request) {
//   try {
//     const { db } = await connectToDatabase();
//     const data = (await req.json()) as SubmissionBody;

//     if (!data?.answers || typeof data.answers !== "object") {
//       return NextResponse.json(
//         { success: false, error: "Missing or invalid 'answers' payload" },
//         { status: 400 }
//       );
//     }

//     // Fetch only what's needed to score: question id + correctAnswerId
//     // If you have exam scoping, filter by examId when provided
//     const questionsQuery: Record<string, any> = {};
//     if (data.examId) questionsQuery.examId = data.examId;

//     // Your question docs can be like:
//     // { id: "5" | 5, correctAnswerId: "opt3", ... }
//     // or may not have `id` but only `_id`. We normalize both.
//     const questions = await db
//       .collection("questions")
//       .find(questionsQuery, { projection: { id: 1, correctAnswerId: 1 } })
//       .toArray();

//     if (!questions.length) {
//       return NextResponse.json(
//         { success: false, error: "No questions found to evaluate." },
//         { status: 400 }
//       );
//     }

//     // Build a lookup: qid(string) -> correctAnswerId(string)
//     const correctMap = new Map<string, string>();
//     for (const q of questions) {
//       // Prefer explicit `id` if present; else fall back to Mongo _id
//       const qid =
//         q.id !== undefined && q.id !== null ? String(q.id) : String(q._id);
//       correctMap.set(qid, String(q.correctAnswerId));
//     }

//     // Score
//     let score = 0;
//     const details: Array<{
//       qid: string;
//       selectedAnswerId: string | null;
//       correctAnswerId: string;
//       isCorrect: boolean;
//     }> = [];

//     // We’ll consider total = number of questions fetched
//     const total = questions.length;

//     // For each question we know about, check if the user answered
//     for (const [qid, correct] of correctMap.entries()) {
//       const selected = data.answers[qid] ?? null;
//       const isCorrect = selected !== null && selected === correct;
//       if (isCorrect) score++;
//       details.push({
//         qid,
//         selectedAnswerId: selected,
//         correctAnswerId: correct,
//         isCorrect,
//       });
//     }

//     const passed = score >= 12; // your current rule

//     // (Optional) nice timestamp
//     const dateStr = new Date().toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });

//     // Persist submission
//     await db.collection("Submissions").insertOne({
//       name: data.name,
//       email: data.email,
//       mobile: data.mobile,
//       batch: data.batch,
//       tutor: data.tutor,
//       answers: data.answers,
//       score,
//       passed,
//       submittedAt: dateStr,
//     });

//     return NextResponse.json({
//       success: true,
//       score,
//       total,
//       percent: Math.round((score / total) * 100),
//       passed,
//       details, // per-question breakdown
//       submittedAt: new Date(),
//     });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json(
//       { success: false, error: "Server error" },
//       { status: 500 }
//     );
//   }
// }

type AnswersMap = Record<string, string>;


function normalizeAnswers(input: SubmissionBody["answers"]): AnswersMap {
  if (!input) return {};
  if (Array.isArray(input)) {
    const out: AnswersMap = {};
    for (const a of input) {
      if (!a) continue;
      out[String(a.questionId).trim()] = String(a.selectedOptionId).trim();
    }
    return out;
  }
  const out: AnswersMap = {};
  for (const [k, v] of Object.entries(input)) {
    out[String(k).trim()] = v == null ? "" : String(v).trim();
  }
  return out;
}

const isHexObjectId = (s: string) => /^[0-9a-fA-F]{24}$/.test(s);

export async function POST(req: Request) {
  try {
    const { db } = await connectToDatabase(); // ensure correct DB
    const body = (await req.json()) as SubmissionBody;

    const answers = normalizeAnswers(body.answers);
    const answerKeys = Object.keys(answers);

    if (answerKeys.length === 0) {
      return NextResponse.json({ success: false, error: "No answers provided." }, { status: 400 });
    }

    // Build ObjectId list from keys
    const objectIdKeys: ObjectId[] = [];
    const invalidKeys: string[] = [];
    for (const k of answerKeys) {
      if (isHexObjectId(k)) objectIdKeys.push(new ObjectId(k));
      else invalidKeys.push(k);
    }

    // Query ONLY by _id (ignore examId for now to avoid accidental 0 matches)
    const query = objectIdKeys.length ? { _id: { $in: objectIdKeys } } : { _id: { $in: [] } };

    const questions = await db
      .collection("questions") // ensure exact collection name
      .find(query, { projection: { _id: 1, correctAnswerId: 1, question: 1 } })
      .toArray();

    if (!questions.length) {
      // DIAGNOSTICS to help you fix the mismatch quickly
      return NextResponse.json(
        {
          success: false,
          error: "No questions found to evaluate.",
          diagnostics: {
            db: "GrovexDB",
            collection: "questions",
            receivedAnswerKeysCount: answerKeys.length,
            sampleReceivedKeys: answerKeys.slice(0, 5),
            validObjectIdKeysCount: objectIdKeys.length,
            sampleObjectIdKeys: objectIdKeys.slice(0, 5).map(x => x.toString()),
            invalidKeys, // keys that aren't valid 24-hex (likely not _id)
            queryUsed: query,
            note:
              "Make sure your answers keys are Mongo _id strings and that documents exist in GrovexDB.questions with those _id values. Also verify you are not filtering by examId unless that field exists on the question docs."
          }
        },
        { status: 400 }
      );
    }

    // Build correctness map
    const correctById = new Map<string, string>();
    for (const q of questions) {
      const key = q._id.toString();
      correctById.set(key, String(q.correctAnswerId));
    }

    // Score
    let score = 0;
    const details = answerKeys.map(k => {
      const selected = answers[k] || null;
      const correct = correctById.get(k) || null;
      const isCorrect = !!selected && !!correct && selected === correct;
      if (isCorrect) score++;
      const qDoc = questions.find(d => d._id.toString() === k);
      return {
        qid: k,
        selectedAnswerId: selected,
        correctAnswerId: correct,
        isCorrect,
        question: qDoc?.question
      };
    });

    const total = questions.length;
    const percent = Math.round((score / (total || 1)) * 100);
    const passed = score >= 12;

    // Save (optional – adjust collection name casing; Mongo is case-sensitive on collections)
    await db.collection("Submissions").insertOne({
      name: body.name,
      email: body.email,
      mobile: body.mobile,
      batch: body.batch,
      tutor: body.tutor,
      examId: body.examId,
      answers, // normalized object
      score,
      total,
      percent,
      passed,
      submittedAt: new Date()
    });

    return NextResponse.json({ success: true, score, total, percent, passed, details });
  } catch (e:unknown) {
    console.error("Submit error:", e);
    return NextResponse.json({ success: false, error: e || "Server error" }, { status: 500 });
  }
}


