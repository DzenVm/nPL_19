"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { quizQuestions } from "@/content/quiz";
import { levels } from "@/content/levels";
import { scoreToLevelCode } from "@/lib/quiz";

export function LevelQuiz() {
  const [answers, setAnswers] = useState<Array<number | null>>(
    () => quizQuestions.map(() => null),
  );
  const [step, setStep] = useState(0);

  const answeredCount = answers.filter((value) => value !== null).length;
  const isFinished = answeredCount === quizQuestions.length;

  const result = useMemo(() => {
    if (!isFinished) return null;
    const total = answers.reduce<number>((sum, value) => sum + (value ?? 0), 0);
    const code = scoreToLevelCode(total);
    return levels.find((level) => level.code === code) ?? null;
  }, [answers, isFinished]);

  function selectOption(score: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = score;
      return next;
    });
    if (step < quizQuestions.length - 1) {
      setStep((value) => value + 1);
    } else {
      setStep(quizQuestions.length);
    }
  }

  function reset() {
    setAnswers(quizQuestions.map(() => null));
    setStep(0);
  }

  if (isFinished && result) {
    return (
      <div className="rounded-sm border border-rule bg-paper p-6 sm:p-8">
        <p className="kicker">Twój wynik</p>
        <p className="mt-3 font-display text-3xl font-semibold text-ink">
          Poziom {result.code} — {result.name}
        </p>
        <p className="mt-4 text-ink-soft leading-relaxed">{result.whatChanges}</p>
        <ul className="mt-4 flex flex-col gap-2 text-sm text-ink-soft">
          {result.sampleCanDo.slice(0, 2).map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-ochre" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs text-ink-faint">
          To orientacyjna samoocena, nie certyfikat. Dokładny poziom potwierdzamy na lekcji
          próbnej, w rozmowie z lektorem.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/kontakt"
            className="rounded-sm bg-cobalt px-5 py-2.5 text-sm font-semibold text-paper hover:bg-cobalt-deep"
          >
            Umów lekcję próbną na poziomie {result.code}
          </Link>
          <Link
            href={`/poziomy#${result.code}`}
            className="rounded-sm border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink/40"
          >
            Pełny opis poziomu {result.code}
          </Link>
          <button
            type="button"
            onClick={reset}
            className="rounded-sm border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink/40"
          >
            Zacznij od nowa
          </button>
        </div>
      </div>
    );
  }

  const question = quizQuestions[step];

  return (
    <div className="rounded-sm border border-rule bg-paper p-6 sm:p-8">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-ink-faint">
        <span>
          Pytanie {step + 1} z {quizQuestions.length}
        </span>
        {step > 0 && (
          <button
            type="button"
            onClick={() => setStep((value) => Math.max(0, value - 1))}
            className="normal-case tracking-normal text-cobalt hover:underline"
          >
            wstecz
          </button>
        )}
      </div>

      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-paper-dim">
        <div
          className="h-full rounded-full bg-cobalt transition-[width] duration-300 ease-out"
          style={{ width: `${(step / quizQuestions.length) * 100}%` }}
        />
      </div>

      <p className="mt-6 font-display text-xl font-semibold text-ink sm:text-2xl">
        {question.prompt}
      </p>

      <div className="mt-5 flex flex-col gap-2.5">
        {question.options.map((option) => (
          <button
            key={option.text}
            type="button"
            onClick={() => selectOption(option.score)}
            className="rounded-sm border border-rule bg-paper px-4 py-3 text-left text-sm text-ink-soft transition-colors hover:border-cobalt hover:bg-cobalt-soft/30 hover:text-ink"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}
