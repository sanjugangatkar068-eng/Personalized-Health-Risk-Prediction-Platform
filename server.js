const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

/* ─── RISK PREDICTION ─── */
app.post('/api/risk/predict', (req, res) => {
  const { age, bmi, systolic_bp, cholesterol, smoker, diabetes, family_history, pm25, exercise } = req.body;

  const logit =
    -6.8 +
    0.065 * age +
    0.13  * bmi +
    0.028 * systolic_bp +
    0.009 * cholesterol +
    1.0   * smoker +
    0.85  * diabetes +
    1.15  * family_history +
    0.018 * pm25 -
    0.04  * exercise;

  const probability = 1 / (1 + Math.exp(-logit));
  const risk_label  = probability > 0.5 ? 'HIGH' : 'LOW';

  const recommendations = [];
  if (smoker)            recommendations.push('Quit smoking — the single most impactful change for cardiovascular health.');
  if (bmi >= 25)         recommendations.push(`Your BMI is ${bmi.toFixed(1)}. Losing 5–10% of body weight significantly reduces risk.`);
  if (systolic_bp >= 140) recommendations.push('Blood pressure is elevated. Reduce sodium intake and consult a physician.');
  if (cholesterol >= 240) recommendations.push('High cholesterol detected. Consider a low-saturated-fat diet and medical evaluation.');
  if (exercise < 3)      recommendations.push('Increase physical activity to at least 3–5 days per week for measurable risk reduction.');
  if (pm25 >= 50)        recommendations.push('High PM2.5 exposure. Use air purifiers indoors and a mask on high-pollution days.');
  if (diabetes)          recommendations.push('Monitor blood glucose regularly and follow your diabetes management plan.');
  if (!recommendations.length) recommendations.push('Excellent profile! Maintain your current healthy lifestyle habits.');

  let bmi_category;
  if (bmi < 18.5)     bmi_category = 'Underweight';
  else if (bmi < 25)  bmi_category = 'Normal';
  else if (bmi < 30)  bmi_category = 'Overweight';
  else                bmi_category = 'Obese';

  res.json({ probability, risk_label, bmi_category, recommendations });
});

/* ─── MEDICAL DATABASE ─── */
const MEDICAL_DB = {
  "common cold":      { description: "A viral infection of the nose and throat.", causes: ["Rhinoviruses","Coronaviruses","RSV"], symptoms: ["Sneezing","Cough","Mild headache","Body aches"], remedies: ["Rest","Hydration","Steam inhalation"], typical_duration: "7–10 days" },
  "influenza":        { description: "A contagious respiratory illness caused by influenza viruses.", causes: ["Influenza virus"], symptoms: ["Fever","Chills","Muscle aches","Cough"], remedies: ["Rest","Hydration","Antiviral medications"] },
  "covid 19":         { description: "A respiratory disease caused by SARS-CoV-2.", causes: ["SARS-CoV-2 virus"], symptoms: ["Fever","Dry cough","Fatigue","Loss of taste/smell"], remedies: ["Isolation","Rest","Hydration","Medical attention if severe"] },
  "asthma":           { description: "Airways narrow and swell, causing breathing difficulty.", causes: ["Genetics","Allergens","Environmental factors"], symptoms: ["Wheezing","Shortness of breath","Chest tightness"], remedies: ["Inhalers","Avoiding triggers","Breathing exercises"] },
  "hypertension":     { description: "Blood pressure consistently too high.", causes: ["Genetics","High salt diet","Stress","Inactivity"], symptoms: ["Usually asymptomatic","Headaches in severe cases"], remedies: ["Lifestyle changes","Antihypertensive medications","Reduced sodium"] },
  "diabetes type 1":  { description: "Pancreas produces little or no insulin.", causes: ["Autoimmune destruction of beta cells","Genetics"], symptoms: ["Frequent urination","Extreme thirst","Unexplained weight loss"], remedies: ["Insulin therapy","Blood sugar monitoring","Diet management"] },
  "diabetes type 2":  { description: "Affects how the body processes blood sugar.", causes: ["Obesity","Physical inactivity","Genetics"], symptoms: ["Fatigue","Blurred vision","Slow healing wounds"], remedies: ["Diet and exercise","Oral medications","Insulin if needed"] },
  "diabetes":         { description: "Chronic disease affecting blood sugar regulation.", causes: ["Insulin deficiency","Insulin resistance"], symptoms: ["Fatigue","Thirst","Frequent urination","Blurred vision"], remedies: ["Healthy diet","Exercise","Blood sugar monitoring","Medication"] },
  "migraine":         { description: "Neurological condition with intense recurring headaches.", causes: ["Genetics","Hormonal changes","Stress","Certain foods"], symptoms: ["Severe headache","Nausea","Light sensitivity","Aura"], remedies: ["Pain relievers","Triptans","Rest in dark room"] },
  "tension headache": { description: "Mild to moderate pain like a tight band around the head.", causes: ["Stress","Fatigue","Poor posture"], symptoms: ["Dull head pain","Tenderness in scalp"], remedies: ["OTC pain relievers","Stress management","Massage"] },
  "gastroenteritis":  { description: "Intestinal infection causing diarrhea, cramps, nausea.", causes: ["Norovirus","Rotavirus","Contaminated food/water"], symptoms: ["Diarrhea","Vomiting","Stomach cramps","Fever"], remedies: ["Oral rehydration","Rest","Bland diet"] },
  "appendicitis":     { description: "Inflammation of the appendix.", causes: ["Blockage in the appendix lining"], symptoms: ["Pain in lower right abdomen","Nausea","Fever"], remedies: ["Appendectomy","Antibiotics"] },
  "bronchitis":       { description: "Inflammation of the bronchial tube lining.", causes: ["Viral infections","Smoking","Air pollution"], symptoms: ["Cough with mucus","Fatigue","Shortness of breath"], remedies: ["Rest","Fluids","Cough suppressants","Humidifier"] },
  "pneumonia":        { description: "Infection inflaming air sacs in one or both lungs.", causes: ["Bacteria","Viruses","Fungi"], symptoms: ["Chest pain","Cough","Fever","Difficulty breathing"], remedies: ["Antibiotics (bacterial)","Antivirals (viral)","Rest and fluids"] },
  "tuberculosis":     { description: "Serious infectious bacterial disease mainly affecting lungs.", causes: ["Mycobacterium tuberculosis"], symptoms: ["Persistent cough","Coughing blood","Night sweats","Weight loss"], remedies: ["Long-term antibiotics","Medical supervision"] },
  "malaria":          { description: "Disease from plasmodium parasites via infected mosquitoes.", causes: ["Plasmodium parasites (Anopheles mosquitoes)"], symptoms: ["Fever","Chills","Sweating","Headache"], remedies: ["Antimalarial drugs","Supportive care"] },
  "dengue fever":     { description: "Mosquito-borne viral disease in tropical areas.", causes: ["Dengue virus (Aedes mosquitoes)"], symptoms: ["High fever","Severe headache","Pain behind eyes","Rash"], remedies: ["Acetaminophen","Fluid replacement","Hospitalization if severe"] },
  "dengue":           { description: "Mosquito-borne viral infection causing flu-like illness.", causes: ["Dengue virus"], symptoms: ["Fever","Severe headache","Rash","Muscle pain"], remedies: ["Rest","Hydration","Paracetamol","Medical monitoring"] },
  "typhoid fever":    { description: "Bacterial infection causing high fever and digestive issues.", causes: ["Salmonella typhi bacteria"], symptoms: ["High fever","Weakness","Abdominal pain","Rash"], remedies: ["Antibiotics","Increased fluid intake"] },
  "typhoid":          { description: "Bacterial infection spreading via contaminated food and water.", causes: ["Salmonella Typhi bacteria"], symptoms: ["High fever","Weakness","Abdominal pain"], remedies: ["Antibiotics","Hydration","Rest"] },
  "chickenpox":       { description: "Highly contagious viral infection with itchy blister rash.", causes: ["Varicella-zoster virus"], symptoms: ["Itchy blisters","Fever","Fatigue"], remedies: ["Calamine lotion","Antihistamines","Rest"] },
  "measles":          { description: "Serious viral infection preventable by vaccine.", causes: ["Measles virus"], symptoms: ["High fever","Cough","Runny nose","Distinctive rash"], remedies: ["Rest","Fever reducers","Vitamin A supplements"] },
  "rubella":          { description: "Contagious viral infection known by its red rash.", causes: ["Rubella virus"], symptoms: ["Red rash","Low fever","Joint pain"], remedies: ["Rest","Fever reducers","Isolation"] },
  "mumps":            { description: "Viral infection affecting the salivary glands.", causes: ["Mumps virus"], symptoms: ["Swollen salivary glands","Fever","Headache"], remedies: ["Pain relievers","Warm/cold compresses","Soft foods"] },
  "rabies":           { description: "Deadly virus from saliva of infected animals.", causes: ["Rabies virus (animal bites)"], symptoms: ["Fever","Headache","Hydrophobia","Confusion"], remedies: ["Post-exposure prophylaxis","Wound washing"] },
  "tetanus":          { description: "Serious bacterial infection causing painful muscle spasms.", causes: ["Clostridium tetani via wounds"], symptoms: ["Jaw cramping","Muscle stiffness","Fever"], remedies: ["Tetanus antitoxin","Antibiotics","Wound care"] },
  "cholera":          { description: "Bacterial disease causing severe diarrhea and dehydration.", causes: ["Vibrio cholerae"], symptoms: ["Watery diarrhea","Vomiting","Muscle cramps"], remedies: ["ORS","IV fluids","Antibiotics"] },
  "peptic ulcer":     { description: "Sore on the lining of the stomach or intestine.", causes: ["H. pylori bacteria","Long-term NSAID use"], symptoms: ["Burning stomach pain","Nausea","Bloating"], remedies: ["Antibiotics","Proton pump inhibitors","Antacids"] },
  "gerd":             { description: "Stomach acid repeatedly flows back into the esophagus.", causes: ["Frequent acid reflux","Obesity","Hiatal hernia"], symptoms: ["Heartburn","Regurgitation","Difficulty swallowing"], remedies: ["Antacids","H2 blockers","Dietary changes"] },
  "irritable bowel syndrome": { description: "Intestinal disorder causing pain, gas, diarrhea, constipation.", causes: ["Abnormal GI contractions","Stress"], symptoms: ["Abdominal pain","Bloating","Alternating diarrhea and constipation"], remedies: ["Dietary changes","Stress management","Medications"] },
  "celiac disease":   { description: "Immune disease where gluten damages the small intestine.", causes: ["Genetic predisposition + gluten ingestion"], symptoms: ["Diarrhea","Bloating","Fatigue","Anaemia"], remedies: ["Strict lifelong gluten-free diet"] },
  "hyperthyroidism":  { description: "Overproduction of thyroid hormone.", causes: ["Graves' disease","Thyroid nodules"], symptoms: ["Weight loss","Rapid heartbeat","Sweating","Anxiety"], remedies: ["Anti-thyroid medications","Radioactive iodine","Beta blockers"] },
  "hypothyroidism":   { description: "Thyroid gland does not produce enough hormone.", causes: ["Hashimoto's disease","Radiation therapy"], symptoms: ["Fatigue","Weight gain","Cold intolerance","Depression"], remedies: ["Levothyroxine replacement therapy"] },
  "anemia":           { description: "Lack of healthy red blood cells to carry adequate oxygen.", causes: ["Iron deficiency","Vitamin B12 deficiency","Chronic disease"], symptoms: ["Fatigue","Pale skin","Shortness of breath","Dizziness"], remedies: ["Iron supplements","Vitamin B12","Dietary changes"] },
  "leukemia":         { description: "Cancer of blood-forming tissues hindering infection defense.", causes: ["Genetic mutations","High radiation exposure"], symptoms: ["Fatigue","Frequent infections","Easy bruising"], remedies: ["Chemotherapy","Stem cell transplant","Targeted therapy"] },
  "hemophilia":       { description: "Blood's clotting ability is severely reduced.", causes: ["Inherited genetic mutation"], symptoms: ["Excessive bleeding","Easy bruising","Joint bleeding"], remedies: ["Clotting factor replacement therapy"] },
  "osteoporosis":     { description: "Bones become weak and brittle, prone to fractures.", causes: ["Aging","Hormonal changes","Calcium deficiency"], symptoms: ["Back pain","Height loss","Bone fractures"], remedies: ["Calcium & Vitamin D","Weight-bearing exercise","Medications"] },
  "osteoarthritis":   { description: "Arthritis from tissue wear at the ends of bones.", causes: ["Joint wear and tear","Aging","Obesity"], symptoms: ["Joint pain","Stiffness","Tenderness","Bone spurs"], remedies: ["Pain relievers","Physical therapy","Joint replacement"] },
  "rheumatoid arthritis": { description: "Chronic inflammatory disorder affecting many joints.", causes: ["Autoimmune attack on synovium"], symptoms: ["Joint pain","Swelling","Morning stiffness"], remedies: ["DMARDs","Biologic agents","Corticosteroids"] },
  "arthritis":        { description: "Inflammation of joints causing pain and stiffness.", causes: ["Age","Autoimmune disorders","Joint injuries"], symptoms: ["Joint pain","Stiffness","Swelling","Reduced motion"], remedies: ["Pain relievers","Physical therapy","Anti-inflammatory drugs"] },
  "gout":             { description: "Arthritis with severe pain and tenderness in joints.", causes: ["High uric acid in blood"], symptoms: ["Sudden severe joint pain","Redness","Swelling"], remedies: ["NSAIDs","Colchicine","Low-purine diet"] },
  "eczema":           { description: "Condition making skin red, itchy, and inflamed.", causes: ["Skin barrier gene variant","Immune overreaction"], symptoms: ["Itchy skin","Red patches","Dry skin","Rash"], remedies: ["Moisturizers","Corticosteroid creams","Avoiding triggers"] },
  "psoriasis":        { description: "Skin cells build up forming itchy, scaly patches.", causes: ["Immune system problem","Genetics"], symptoms: ["Red patches with silvery scales","Dry cracked skin","Itching"], remedies: ["Topical treatments","Light therapy","Systemic medications"] },
  "acne":             { description: "Hair follicles plugged with oil and dead skin cells.", causes: ["Excess sebum","Bacteria","Hormonal changes"], symptoms: ["Pimples","Blackheads","Whiteheads","Cysts"], remedies: ["Topical retinoids","Benzoyl peroxide","Oral antibiotics"] },
  "melanoma":         { description: "Most serious skin cancer, develops in melanocytes.", causes: ["UV radiation","Genetic factors"], symptoms: ["Changing mole","Unusual skin growth","Asymmetric lesion"], remedies: ["Surgical removal","Immunotherapy","Targeted therapy"] },
  "alzheimers disease": { description: "Progressive disease destroying memory and mental function.", causes: ["Abnormal brain proteins","Genetics"], symptoms: ["Memory loss","Confusion","Mood changes"], remedies: ["Cognition-enhancing medications","Supportive care"] },
  "parkinsons disease": { description: "CNS disorder affecting movement, often with tremors.", causes: ["Loss of dopamine-producing cells","Genetics"], symptoms: ["Tremors","Slow movement","Muscle stiffness"], remedies: ["Levodopa","Dopamine agonists","Physical therapy"] },
  "multiple sclerosis": { description: "Immune system attacks protective covering of nerves.", causes: ["Autoimmune attack on myelin"], symptoms: ["Numbness","Fatigue","Balance problems","Vision issues"], remedies: ["Immunosuppressants","Physical therapy","Corticosteroids"] },
  "epilepsy":         { description: "CNS disorder with abnormal brain activity causing seizures.", causes: ["Genetic influence","Head trauma","Brain conditions"], symptoms: ["Seizures","Temporary confusion","Staring spells"], remedies: ["Anti-seizure medications","Vagus nerve stimulation","Surgery"] },
  "schizophrenia":    { description: "Disorder affecting thinking, feeling, and behaviour.", causes: ["Genetics","Brain chemistry","Environment"], symptoms: ["Hallucinations","Delusions","Disorganised thinking"], remedies: ["Antipsychotic medications","Psychosocial therapy"] },
  "bipolar disorder": { description: "Mood swings from depressive lows to manic highs.", causes: ["Brain biology","Genetics"], symptoms: ["Extreme mood swings","Impulsive behaviour","Depression episodes"], remedies: ["Mood stabilizers","Antipsychotics","Psychotherapy"] },
  "major depressive disorder": { description: "Persistently depressed mood or loss of interest.", causes: ["Brain chemistry","Hormones","Inherited traits"], symptoms: ["Persistent sadness","Loss of interest","Fatigue","Sleep problems"], remedies: ["Antidepressants","CBT","Lifestyle modifications"] },
  "hepatitis":        { description: "Inflammation of the liver from viruses, alcohol, or toxins.", causes: ["Hepatitis viruses (A,B,C)","Alcohol abuse","Toxins"], symptoms: ["Jaundice","Fatigue","Abdominal pain","Nausea"], remedies: ["Antiviral medication","Rest","Healthy diet"] }
};

/* Build symptom map server-side */
const SYMPTOM_MAP = {};
Object.entries(MEDICAL_DB).forEach(([cond, info]) => {
  if (info.symptoms) {
    info.symptoms.forEach(s => {
      const k = s.toLowerCase();
      if (!SYMPTOM_MAP[k]) SYMPTOM_MAP[k] = [];
      SYMPTOM_MAP[k].push(cond);
    });
  }
});

function fuzzyScore(a, b) {
  a = a.toLowerCase(); b = b.toLowerCase();
  if (a === b) return 1.0;
  if (!a || !b) return 0.0;
  let m = 0;
  const used = new Array(b.length).fill(false);
  for (const ch of a) {
    for (let i = 0; i < b.length; i++) {
      if (!used[i] && ch === b[i]) { m++; used[i] = true; break; }
    }
  }
  return (m * 2) / (a.length + b.length);
}

/* GET /api/medibot/conditions — list all condition names */
app.get('/api/medibot/conditions', (_req, res) => {
  res.json({ conditions: Object.keys(MEDICAL_DB) });
});

/* POST /api/medibot/search — search by text or symptoms */
app.post('/api/medibot/search', (req, res) => {
  const { query } = req.body;
  if (!query) return res.status(400).json({ error: 'query is required' });
  const input = query.trim().toLowerCase();

  // Exact / substring match
  for (const c of Object.keys(MEDICAL_DB)) {
    if (input.includes(c)) return res.json({ match: c, method: 'exact', data: MEDICAL_DB[c] });
  }
  // All words in condition present
  for (const c of Object.keys(MEDICAL_DB)) {
    if (c.split(' ').every(w => input.includes(w)))
      return res.json({ match: c, method: 'word', data: MEDICAL_DB[c] });
  }

  // Symptom-based match
  const words = input.split(/[\s,]+/);
  const hits = {};
  words.forEach(w => {
    if (w.length < 3) return;
    Object.entries(SYMPTOM_MAP).forEach(([sym, conds]) => {
      if (sym.includes(w) || w.includes(sym))
        conds.forEach(c => { hits[c] = (hits[c] || 0) + 1; });
    });
  });
  if (Object.keys(hits).length > 0) {
    const best = Object.entries(hits).sort((a, b) => b[1] - a[1])[0];
    return res.json({ match: best[0], method: 'symptom', data: MEDICAL_DB[best[0]] });
  }

  // Fuzzy match
  let bestScore = 0, bestC = null;
  for (const c of Object.keys(MEDICAL_DB)) {
    for (const iw of words) {
      if (iw.length < 3) continue;
      for (const cw of c.split(' ')) {
        const s = fuzzyScore(iw, cw);
        if (s > bestScore) { bestScore = s; bestC = c; }
      }
    }
  }
  if (bestScore >= 0.70)
    return res.json({ match: bestC, method: 'fuzzy', data: MEDICAL_DB[bestC] });

  res.json({ match: null, method: 'none', suggestions: ['asthma','migraine','covid 19','hypertension','diabetes type 2','malaria','eczema','anemia'] });
});

/* POST /api/medibot/severity */
app.post('/api/medibot/severity', (req, res) => {
  const { age, pain } = req.body;
  if (!age || !pain) return res.status(400).json({ error: 'age and pain are required' });

  let level, label, body;
  if (pain >= 8) {
    level = 'critical'; label = 'CRITICAL — IMMEDIATE ATTENTION REQUIRED';
    body = `Pain score: ${pain}/10. Seek emergency medical care immediately.`;
  } else if (pain >= 5) {
    level = 'moderate'; label = 'MODERATE — MEDICAL CONSULTATION ADVISED';
    body = `Pain score: ${pain}/10. Schedule an appointment with your physician promptly.`;
  } else {
    level = 'mild'; label = 'MILD — MONITOR & REST';
    body = `Pain score: ${pain}/10. Discomfort is manageable. Rest well and stay hydrated.`;
  }

  const advisories = [];
  if (age > 65 && pain >= 6) advisories.push({ level: 'info', label: 'AGE-RELATED ADVISORY (65+)', body: 'Elevated pain in patients 65+ warrants professional evaluation regardless of perceived severity.' });
  else if (age < 12 && pain >= 6) advisories.push({ level: 'info', label: 'PEDIATRIC ADVISORY (<12 YRS)', body: 'Consult a pediatrician for patients under 12 with this pain level.' });

  res.json({ level, label, body, advisories });
});

/* GET /api/health */
app.get('/api/health', (_req, res) => res.json({ status: 'ok', conditions: Object.keys(MEDICAL_DB).length }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`HealthHub API running on http://localhost:${PORT}`));
