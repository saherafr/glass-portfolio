import React from "react";
import "./leetcode.css";

/* ------------------------------------------------------------------ */
/* 1)  JOURNAL DATA – add new days here                               */
/* ------------------------------------------------------------------ */
const lcData = [
    {
        day: 1, title: "Two Sum, Valid Anagram",
        journal: "I was too lazy to even open my MacBook, but I still got myself to solve 2 problems. Baby steps count. Day 1, done. Yipee!",
        quote: "I showed up. That’s already a win."
    },
    {
        day: 2, title: "Group Anagrams",
        journal: "Solved it without looking at the solution. I literally jumped on my bed. This felt like real progress after months of doubting myself.",
        quote: "This was the day I believed I could actually do this."
    },
    {
        day: 3, title: "Top K Frequent Elements",
        journal: "First time understanding bucket sort properly. Not gonna lie, my brain hurt. But I didn’t quit.",
        quote: "Understanding > memorizing. And I’m getting there."
    },
    {
        day: 4, title: "Valid Parentheses, Merge Intervals",
        journal: "Merge Intervals looked scary at first, but once I dry-ran it, things clicked. Still hate parentheses though.",
        quote: "It’s not hard. It’s just unfamiliar."
    },
    {
        day: 5, title: "Insert Interval, Search Insert Position",
        journal: "Tried to rush and made silly mistakes. Took a break, came back, solved both. Still learning to be kind to myself.",
        quote: "Breaking things down is my power move."
    },
    {
        day: 6, title: "Binary Search Variants",
        journal: "Felt like I kept missing edge cases. But writing them out helped me see the bigger picture.",
        quote: "When stuck, go back to the fundamentals."
    },
    {
        day: 7, title: "Minimum in Rotated Sorted Array",
        journal: "Honestly? Didn’t even want to code. But opened VS Code anyway and solved one. That’s enough.",
        quote: "Discipline > motivation."
    },
    {
        day: 8, title: "Search in Rotated Sorted Array",
        journal: "This one was a brain twister. But I slowed down, drew it out, and eventually nailed it.",
        quote: "If I can solve this, I can solve harder things too."
    },
    {
        day: 9, title: "Find Peak Element",
        journal: "Binary search feels natural now. I’m starting to notice patterns I used to miss before.",
        quote: "Repetition makes it less scary."
    },
    {
        day: 10, title: "Reverse LL, Middle of LL",
        journal: "Felt smooth. I remember being scared of Linked Lists. Now I’m flowing through them.",
        quote: "It’s not magic — it’s reps and patience."
    },
    {
        day: 11, title: "Detect Cycle in Linked List",
        journal: "Floyd's algo sounded intimidating. But I traced it step by step and it made sense. Confidence building.",
        quote: "I’m starting to trust my logic."
    }
];

/* ------------------------------------------------------------------ */
/* 2)   PROGRESS CALCULATION                                          */
/* ------------------------------------------------------------------ */
const TOTAL_DAYS = 100;
const completed = lcData.length;
const percentDone = (completed / TOTAL_DAYS) * 100;   // e.g., 11 → 11%

/* ------------------------------------------------------------------ */
/* 3)   COMPONENT                                                     */
/* ------------------------------------------------------------------ */
const Leetcode = () => {
    return (
        <section id="leetcode">
            {/* --------------- Progress Bar Header --------------- */}
            <div className="leetcode__heading">
                <h5>Daily Grind</h5>

                <h2 className="leetcode__progress">
                    Day {completed} of {TOTAL_DAYS} complete
                </h2>

                <div className="leetcode__bar">
                    <div
                        className="leetcode__fill"
                        style={{ width: `${percentDone}%` }}
                    />
                </div>
            </div>

            {/* ---------------------- Intro ---------------------- */}
            <div className="leetcode__intro">
                <p>
                    During my sophomore year, while others built trendy AI projects, I was
                    still struggling with <code>if</code> and <code>for</code> statements.
                    It felt isolating — but I refused to quit.
                </p>
                <p>
                    I stepped back, practised pseudocode &amp; dry-runs, and began solving
                    LeetCode easies on my own. When&nbsp;
                    <i>Group Anagrams</i> finally clicked, I jumped on my bed in pure joy.
                </p>
                <p>
                    This challenge is my way of sharpening the knife — proving I can push
                    past every limit I once believed I had.
                </p>

                <a
                    href="https://www.notion.so/LeetCode-1f5cdee609b5801f8b2ad6c34e8ebc98?pvs=4"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-notion"
                >
                    📄 View Scribbled Notes on Notion
                </a>
            </div>

            {/* ------------------ Journal Cards ------------------ */}
            <div className="container leetcode__container">
                {lcData.map(({ day, title, journal, quote }) => (
                    <article key={day} className="leetcode__card">
                        <h3>
                            Day&nbsp;{day}: {title}
                        </h3>
                        <p className="leetcode__journal">{journal}</p>
                        {quote && (
                            <blockquote className="leetcode__quote">“{quote}”</blockquote>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Leetcode;
