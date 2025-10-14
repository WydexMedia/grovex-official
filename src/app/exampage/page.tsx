"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";





// import "antd/dist/reset.css"

// Translations
const translations = {
    en: {
        title: "Digital Marketing Exam",
        timesUp: "Time's Up!",
        timeExceeded: "You have exceeded the allotted time for this exam.",
        contactTeam: "Please contact our team for further assistance.",
        instructions: "Instructions",
        instruction1: "• You have 20 minutes to complete this exam",
        instruction2: "• The test will automatically close after the allotted time",
        instruction3: "• Ensure stable internet connection",
        instruction4: "• Do not refresh or close the browser during the exam",
        instruction5: "• Please make sure your email address is correct, as your certificate will be sent there.",
        goodLuck: "Good luck! — Team Grovex",
        contactInfo: "Contact Information",
        startExam: "START EXAM",
        questions: "Questions",
        submitExam: "SUBMIT EXAM",
        enterField: "Enter your",
        emailRequired: "Please enter your email before starting."
    },
    ml: {
        title: " ഡിജിറ്റൽ മാർക്കറ്റിംഗ് പരീക്ഷ",
        timesUp: "സമയം കഴിഞ്ഞു!",
        timeExceeded: "നിങ്ങൾ ഈ പരീക്ഷയ്ക്ക് നിശ്ചിത സമയം കവിഞ്ഞു.",
        contactTeam: "കൂടുതൽ സഹായത്തിനായി ഞങ്ങളുടെ ടീമുമായി ബന്ധപ്പെടുക.",
        instructions: "നിർദ്ദേശങ്ങൾ",
        instruction1: "• ഈ പരീക്ഷ പൂർത്തിയാക്കാൻ നിങ്ങൾക്ക് 20 മിനിറ്റ് സമയമുണ്ട്",
        instruction2: "• നിശ്ചിത സമയത്തിന് ശേഷം ടെസ്റ്റ് സ്വയമേവ അടച്ചുപൂട്ടും",
        instruction3: "• സ്ഥിരമായ ഇന്റർനെറ്റ് കണക്ഷൻ ഉറപ്പാക്കുക",
        instruction4: "• പരീക്ഷ സമയത്ത് ബ്രൗസർ റിഫ്രഷ് ചെയ്യരുത് അല്ലെങ്കിൽ അടയ്ക്കരുത്",
        instruction5: "• നിങ്ങളുടെ സർട്ടിഫിക്കറ്റ് അവിടെ അയയ്ക്കപ്പെടുമെന്നതിനാൽ നിങ്ങളുടെ ഇമെയിൽ വിലാസം ശരിയാണെന്ന് ഉറപ്പാക്കുക.",
        goodLuck: "ആശംസകൾ! — ഗ്രോവെക്സ് ടീം",
        contactInfo: "ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ",
        startExam: "പരീക്ഷ ആരംഭിക്കുക",
        questions: "ചോദ്യങ്ങൾ",
        submitExam: "പരീക്ഷ സമർപ്പിക്കുക",
        enterField: "നിങ്ങളുടെ നൽകുക",
        emailRequired: "ആരംഭിക്കുന്നതിന് മുമ്പ് നിങ്ങളുടെ ഇമെയിൽ നൽകുക."
    }
};

interface Option { id: string; text: string; }
interface Question {
    _id: string;
    id: number | string;
    question: string;
    options: Option[];
    correctAnswerId?: string;
}


export default function DigitalMarketingExam() {
    const [lockoutMessage, setLockoutMessage] = useState<string>("");
    const [timeLeft, setTimeLeft] = useState<number>(20 * 60);
    const [isTimeOver, setIsTimeOver] = useState<boolean>(false);
    const [started, setStarted] = useState<boolean>(false);
    const [submitting, setSubmitting] = useState(false);
    const [language, setLanguage] = useState<"en" | "ml">("en");
    const [list, setList] = useState<Record<string, string[]>>({});
    const [Questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);
    const t = translations[language];




    const handleStartNow = async (): Promise<void> => {
        const emailInput = (
            document.querySelector("input[name='email']") as HTMLInputElement
        )?.value;

        if (!emailInput) {
            // toast.warning("Email is required")
            showToast(t.emailRequired, "warning");
            return;
        }
        function showToast(message: string, type: "success" | "error" | "warning" | "info") {
            switch (type) {
                case "success":
                    toast.success(message);
                    break;
                case "error":
                    toast.error(message);
                    break;
                case "warning":
                    toast.warning(message);
                    break;
                default:
                    toast(message);
            }
        }







        const res = await fetch("/api/checkLockout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: emailInput }),
        });

        const result = await res.json();
        if (result.allowed) {
            setStarted(true);
            setLockoutMessage("");
        } else {
            setLockoutMessage(
                `You have already submitted an exam recently. Please wait ${Math.ceil(
                    result.hoursRemaining
                )} hour(s) before reapplying.`
            );
        }
    };

    // questions fetching function
    async function fetchQuestions() {
        try {
            const res = await fetch("/api/exam", { cache: "no-store" });
            if (!res.ok) throw new Error("Failed to load questions");
            const data = await res.json();

            // pick the array off data.questions
            const arr = Array.isArray(data) ? data : data.questions ?? [];
            setQuestions(arr);
        } catch (err) {
            console.error("Fetch failed:", err);
            setQuestions([]); // safe fallback
        } finally {
            setLoading(false)
        }
    }

    // useEffect or anywhere you want to load questions
    useEffect(() => {
        fetchQuestions();
    }, []);




    useEffect(() => {
        const originalScroll = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = "smooth";
        return () => {
            document.documentElement.style.scrollBehavior = originalScroll;
        };
    }, []);

    useEffect(() => {
        if (!started) return;
        if (timeLeft <= 0) {
            setIsTimeOver(true);
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft, started]);

    // tutors fetching useeffect 
    useEffect(() => {
        async function loadTutors() {
            try {
                const data = await fetchTutorsByCategory("Digital Marketing");
                setList(data);
            } catch (err) {
                console.error(err);
            }
        }

        loadTutors();
    }, []);

    const fetchTutorsByCategory = async (category: string) => {
        const res = await fetch(`/api/tutors?category=${encodeURIComponent(category)}`);
        if (!res.ok) {
            throw new Error("Failed to fetch tutors");
        }
        return res.json();
    };




    const formatTime = (seconds: number): string => {
        const m = Math.floor(seconds / 60)
            .toString()
            .padStart(2, "0");
        const s = (seconds % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    };






    // Malayalam to English mapping for answers


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData(e.currentTarget);

        // Build answers map: {"<questionId>": "<optionId>"}
        const answers: Record<string, string> = {};
        for (const [key, value] of formData.entries()) {
            if (key.startsWith("q-")) {
                const qid = key.slice(2);           // remove "q-" prefix -> actual question id string
                answers[qid] = String(value);       // value is option.id (e.g., "opt3")
            }
        }

        // Optional: sanity check that all questions were answered
        // if (Array.isArray(Questions) && Object.keys(answers).length !== Questions.length) {
        //   alert("Please answer all questions.");
        //   setSubmitting(false);
        //   return;
        // }

        const payload = {
            type: "Digital Marketing",
            // If you have exam scoping on backend, send examId too (e.g., "meta-ads-basics")
            examId: "meta-ads-basics",
            name: formData.get("name"),
            email: formData.get("email"),
            mobile: formData.get("mobile"),
            batch: formData.get("batch"),
            tutor: formData.get("tutor"),
            answers,
        };

        try {
            // IMPORTANT: correct API path (no trailing spaces)
            const res = await fetch("/api/exam", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const result = await res.json();
            // console.log("Exam submit result:", result);

            if (result.success) {
                if (result.passed) {
                    window.location.href = `/exam/success?score=${result.score}&name=${encodeURIComponent(
                        String(payload.name ?? "")
                    )}&type=${encodeURIComponent(String(payload.type))}`;
                } else {
                    window.location.href = `/exam/failure?score=${result.score}&name=${encodeURIComponent(
                        String(payload.name ?? "")
                    )}`;
                }
            } else {
                showToast(result.error || "Error submitting exam.", "error");
                setSubmitting(false);
                function showToast(message: string, type: "success" | "error" | "warning" | "info") {
                    switch (type) {
                        case "success":
                            toast.success(message);
                            break;
                        case "error":
                            toast.error(message);
                            break;
                        case "warning":
                            toast.warning(message);
                            break;
                        default:
                            toast(message);
                    }
                }
            }


        } catch (err) {
            console.error(err);
            toast.error("Network error submitting exam.");
            setSubmitting(false);
        }
    };


    if (isTimeOver) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center p-4">
                <div className="max-w-md w-full">
                    <div className="border-2 border-black p-8 text-center">
                        <h1 className="text-3xl font-bold mb-4 text-black">{t.timesUp}</h1>
                        <p className="text-lg mb-4 text-black">{t.timeExceeded}</p>
                        <p className="font-medium text-black">{t.contactTeam}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-black">
            {/* Language Switcher */}
            <div className="absolute top-16 left-4 z-10 sm:top-4 sm:left-4">
                <button
                    onClick={() => setLanguage(language === "en" ? "ml" : "en")}
                    className="px-3 py-1 text-sm border border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-200"
                >
                    {language === "en" ? "മലയാളം" : "English"}
                </button>
            </div>
            <div className="max-w-4xl mx-auto p-6">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
                    <div className="w-32 h-0.5 bg-black mx-auto"></div>
                </div>

                {/* Timer - Only show when started */}
                {started && (
                    <div className="fixed top-4 right-4 bg-black text-white px-4 py-2 text-xl font-mono">
                        {formatTime(timeLeft)}
                    </div>
                )}

                {/* Instructions */}
                <div className="border-2 border-black p-6 mb-8">
                    <h2 className="text-xl font-bold mb-4">{t.instructions}</h2>
                    <div className="space-y-2 text-sm">
                        <p>{t.instruction1}</p>
                        <p>{t.instruction2}</p>
                        <p>{t.instruction3}</p>
                        <p>{t.instruction4}</p>
                        <p>{t.instruction5}</p>
                    </div>
                    <p className="mt-4 font-medium">{t.goodLuck}</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Contact Information */}
                    <div className="border-2 border-black p-6">
                        <h2 className="text-xl font-bold mb-6">{t.contactInfo}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {["name", "email", "mobile", "batch", "tutor"].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium mb-2 capitalize">
                                        {field} *
                                    </label>

                                    {field === "tutor" ? (
                                        <select
                                            name="tutor"
                                            required
                                            className="w-full border-2 border-black px-4 py-2 focus:outline-none bg-white disabled:bg-gray-50"
                                        >
                                            <option value="">Select Tutor</option>

                                            {Object.entries(list).map(([category, names]) => (
                                                <optgroup key={category} label={category}>
                                                    {names.map((name) => (
                                                        <option key={name} value={name}>
                                                            {name}
                                                        </option>
                                                    ))}
                                                </optgroup>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            type={field === "email" ? "email" : "text"}
                                            name={field}
                                            required
                                            readOnly={started}
                                            className="w-full border-2 border-black px-4 py-2 focus:outline-none bg-white disabled:bg-gray-50"
                                            placeholder={`${t.enterField} ${field}`}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>


                        {lockoutMessage && (
                            <div className="mt-4 p-4 border-2 border-black bg-gray-50">
                                <p className="font-medium text-black">{lockoutMessage}</p>
                            </div>
                        )}
                        {!started && (
                            <div className="mt-6">
                                <Button
                                    type="button"
                                    onClick={handleStartNow}   // custom function to validate & start
                                    className="w-full"
                                    style={{
                                        backgroundColor: "#000",
                                        color: "#fff",
                                        border: "none",
                                        height: 56,
                                        fontSize: 20,
                                    }}
                                >
                                    {t.startExam ?? "Start Exam"}
                                </Button>
                            </div>
                        )}


                    </div>

                    {/* Questions */}
                    {started && (
                        <div className="border-2 border-black p-6">
                            <h2 className="text-xl font-bold mb-6">{t.questions}</h2>

                            {loading ? (
                                <div className="text-gray-500 text-sm">Loading questions...</div>
                            ) : !Array.isArray(Questions) || Questions.length === 0 ? (
                                <div className="text-gray-500 text-sm">No questions found.</div>
                            ) : (
                                <div className="space-y-8">
                                    {Questions.map((q: Question, index: number) => (
                                        <div key={q._id ?? index} className="border border-black p-6">
                                            <h3 className="font-bold text-lg mb-4">
                                                {index + 1}. {q.question} <span className="text-red-600">*</span>
                                            </h3>

                                            <div className="space-y-3">
                                                {Array.isArray(q.options) &&
                                                    q.options.map((option: Option, optionIndex: number) => (
                                                        <label
                                                            key={option.id}
                                                            className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 -m-2"
                                                        >
                                                            <input
                                                                key={q._id}
                                                                type="radio"
                                                                name={`q-${q._id.toString()}`}
                                                                value={option.id}
                                                                required
                                                                className="mt-1 h-4 w-4"
                                                            />
                                                            <span className="flex-1">
                                                                {String.fromCharCode(97 + optionIndex)}) {option.text}
                                                            </span>
                                                        </label>
                                                    ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="mt-8 pt-6 border-t-2 border-black">
                                <Button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full"

                                    style={{
                                        backgroundColor: "#000",
                                        color: "#fff",
                                        border: "none",
                                        height: 56,
                                        fontSize: 20,
                                    }}
                                >
                                    {t.submitExam}
                                </Button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );

}