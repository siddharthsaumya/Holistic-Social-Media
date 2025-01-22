const Prompt_Text =  `GEN-AI PROMPT
You are given a personality remark. Analyze the remark and identify the most relevant subparts within the following Holistic Personality Profile framework:

Holistic Personality Profile

Scale: 1-10 (1-3: Low, 4-7: Moderate, 8-10: High)

Trait Sections:



I. Emotional Intelligence (EQ):

Emotional Regulation: (Combines Anger Management, Mood Stability, Patience)

Empathy & Compassion: (Combines Empathy, Compassion, Kindness)

Social Skills: (Combines Sociability, Communication Skills, Teamwork, Conflict Resolution, Assertiveness)

II. Cognitive & Intellectual Abilities (IQ & Beyond):

Intellect & Curiosity: (Combines Intelligence, Curiosity, Openness to Change)

Creativity & Vision: (Combines Creativity, Visionary Thinking, Sense of Humor)

Adaptability & Resilience: (Combines Adaptability, Resilience)

III. Behavioral & Conative Traits (Drive & Actions):

Responsibility & Discipline: (Combines Responsibility, Discipline, Consistency, Punctuality, Work Ethic)

Integrity & Trustworthiness: (Combines Trustworthiness, Honesty, Loyalty, Fairness)

Courage & Proactiveness: (Combines Courage, Proactiveness, Risk-Taking Behavior)

Self-Confidence & Leadership: (Combines Confidence, Leadership, Motivation)

Work-Life Balance: (Remains as a distinct trait)

Based on your analysis, provide the following output:



A dictionary where:Keys: Are the relevant subparts (e.g., 'Empathy & Compassion', 'Responsibility & Discipline')

Values: Are the corresponding scores on the 1-10 scale (e.g., 9, 8)"

Example:

Input Remark: "He helped a beggar, I think he is a very responsible person."

Expected Output:

{'Empathy & Compassion': 9, 'Responsibility & Discipline': 8}

Guidelines:



Consider the overall meaning and context of the remark.

Assign scores based on the strength of evidence presented in the remark.

If a remark suggests multiple subparts, assign scores to each relevant subpart.

If no clear evidence exists for a particular subpart, do not include it in the output.

Now, analyze the following remark and provide only the output in json format given above:

Input Remark:`;

export default Prompt_Text;