'use client'

import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

interface ScoreComponent {
  label: string
  score: number
  max: number
}

const scoreComponents: ScoreComponent[] = [
  { label: 'Academic performance', score: 88, max: 100 },
  { label: 'Operational efficiency', score: 92, max: 100 },
  { label: 'Financial stability', score: 76, max: 100 },
  { label: 'Enrollment growth', score: 81, max: 100 },
  { label: 'Parent & student engagement', score: 76, max: 100 },
  { label: 'Teacher retention', score: 85, max: 100 },
  { label: 'TInfrastructure efficiency', score: 71, max: 100 },
]

const KeyEdScore = () => {
  const overallScore = 84
  const trend = 2.4
  const circumference = 2 * Math.PI * 90 // radius = 90
  const scorePercentage = (overallScore / 100) * 100
  const strokeDashoffset = circumference - (scorePercentage / 100) * circumference

  return (
    <section className="py-10 md:py-20 lg:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
           <h2 className="text-5xl md:text-7xl font-bold text-black mb-4 font-arabic">
            Meet India’s First Campus Health Score
          </h2>
          <div className="w-32 h-1 bg-[#f15a24] mx-auto"></div>
          <p>KeyEd Score gives leadership a real-time health indicator of their institution across:</p>
          
        </motion.div>

        {/* Main Score Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-12"
        >
          {/* KeyEd Score Title */}
          <div className="flex items-center gap-4 mb-20">
            <div className="w-22 h-22 bg-[#142833] p-2 rounded-xl flex items-center justify-center">
              {/* Icon placeholder */}
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="60" viewBox="0 0 45 60" fill="none">
  <path d="M44.5718 21.9844C44.5718 20.5994 41.936 19.4872 41.6733 18.1786C41.4031 16.8298 43.4015 14.8099 42.8803 13.5688C42.3494 12.3066 39.4834 12.2745 38.7217 11.1528C37.9544 10.0215 39.0161 7.39746 38.0442 6.43868C37.0723 5.4799 34.4123 6.52733 33.2655 5.77108C32.1277 5.01961 32.0959 2.19237 30.8164 1.66866C29.5583 1.15381 27.5108 3.12524 26.1435 2.85929C24.8163 2.60016 23.6895 0 22.2856 0C20.8816 0 19.7542 2.60016 18.4276 2.85929C17.0603 3.12592 15.0128 1.15449 13.7547 1.66866C12.4752 2.19237 12.4427 5.01961 11.3056 5.77108C10.1588 6.52801 7.4988 5.48059 6.52688 6.43936C5.55497 7.39814 6.61675 10.0222 5.85014 11.1535C5.08837 12.2759 2.2224 12.3073 1.69152 13.5695C1.16961 14.8106 3.16805 16.8305 2.89846 18.1793C2.63578 19.4886 0 20.6001 0 21.9851C0 23.3701 2.63578 24.4823 2.89846 25.7909C3.16874 27.1397 1.1703 29.1596 1.69152 30.4006C2.2224 31.6629 5.08837 31.6949 5.85014 32.8167C6.61744 33.948 5.55566 36.572 6.52758 37.5308C7.49949 38.4896 10.1595 37.4421 11.3063 38.1984C12.4441 38.9499 12.4759 41.7771 13.7554 42.3008C15.0135 42.8157 17.061 40.8442 18.4283 41.1102C19.7555 41.3693 20.8823 43.9695 22.2862 43.9695C23.6902 43.9695 24.8176 41.3693 26.1442 41.1102C27.5115 40.8436 29.559 42.815 30.8171 42.3008C32.0966 41.7771 32.1291 38.9499 33.2662 38.1984C34.413 37.4415 37.073 38.4889 38.0449 37.5301C39.0168 36.5713 37.9551 33.9473 38.7217 32.816C39.4834 31.6936 42.3494 31.6622 42.8803 30.4C43.4022 29.1589 41.4038 27.139 41.6733 25.7902C41.936 24.4809 44.5718 23.3694 44.5718 21.9844ZM22.2856 29.388C18.1117 29.388 14.728 26.05 14.728 21.9326C14.728 17.8151 18.1117 14.4771 22.2856 14.4771C26.4594 14.4771 29.8431 17.8151 29.8431 21.9326C29.8431 26.05 26.4594 29.388 22.2856 29.388Z" fill="white"/>
  <path d="M19.3441 43.4318C19.0668 43.1243 18.8048 42.8341 18.5602 42.6221C18.3003 42.397 18.1874 42.3728 18.1825 42.3714C18.1763 42.37 18.1609 42.368 18.1345 42.368C17.7951 42.368 17.1506 42.6748 16.6322 42.9206C15.8372 43.2988 15.0157 43.6894 14.1684 43.6894C13.843 43.6894 13.5351 43.6305 13.2536 43.5142C12.0955 43.037 11.6538 41.7883 11.2643 40.6863C11.1256 40.2937 10.9946 39.9224 10.8483 39.6295C10.6936 39.3192 10.5947 39.2478 10.5842 39.2409C10.5647 39.2278 10.4734 39.1779 10.2003 39.1509L2.5929 52.1591C2.00134 53.1709 2.93014 54.3906 4.07006 54.099L9.5293 52.7034C10.1292 52.5497 10.7563 52.8295 11.0392 53.3773L13.9064 58.9146C14.4416 59.9479 15.9626 59.8378 16.3417 58.738L21.0811 44.9749C20.4087 44.6119 19.8541 43.9969 19.3427 43.4311L19.3441 43.4318Z" fill="white"/>
  <path d="M34.3724 39.1509C34.0993 39.1779 34.008 39.2284 33.9885 39.2409C33.978 39.2485 33.8791 39.3192 33.7244 39.6295C33.5788 39.9224 33.4471 40.2936 33.3077 40.6863C32.9182 41.7876 32.4771 43.0363 31.319 43.5135C31.0368 43.6298 30.7295 43.6887 30.4041 43.6887C29.5568 43.6887 28.7353 43.2981 27.9403 42.9199C27.4225 42.6741 26.7773 42.3673 26.438 42.3673C26.4115 42.3673 26.3969 42.3693 26.3899 42.3707C26.3857 42.3714 26.2721 42.3957 26.0129 42.6214C25.7683 42.8334 25.5063 43.1236 25.229 43.4311C24.7176 43.9976 24.1622 44.6119 23.4905 44.9755L28.2294 58.738C28.6085 59.8378 30.1296 59.9479 30.6647 58.9146L33.5321 53.3773C33.8157 52.8302 34.4421 52.5497 35.042 52.7034L40.5015 54.099C41.6421 54.3906 42.5702 53.1709 41.9787 52.1591L34.371 39.1516L34.3724 39.1509Z" fill="white"/>
</svg>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-black font-arabic">KeyEd Score</h3>
              <p className="text-[#486776] text-sm">Overall Campus Health Score</p>
            </div>
          </div>

         <div className="grid grid-cols-1 lg:grid-cols-[30%_60%] gap-12">

            
            {/* Left - Circular Score */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-64 h-64 mb-6">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="135"
                    cy="135"
                    r="100"
                    stroke="#f15a24"
                    strokeWidth="12"
                    fill="none"
                  />
                  {/* Progress Circle */}
                  <motion.circle
                    cx="135"
                    cy="135"
                    r="100"
                    stroke="#486776"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                  />
                  {/* Orange accent arc */}
                  <motion.circle
                    cx="135"
                    cy="135"
                    r="100"
                    stroke="#f15a24"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: circumference - (10 / 100) * circumference }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                  />
                </svg>

                {/* Score Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                  >
                    <div className="text-6xl font-bold text-[#486776] mb-2">{overallScore}</div>
                    <div className="text-lg text-gray-600">Excellent</div>
                  </motion.div>
                </div>
              </div>

              {/* Trend Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex items-center gap-2 mb-4"
              >
                <TrendingUp className="w-5 h-5 text-[#486776]" />
                <span className="text-sm font-semibold text-[#486776]">
                  +{trend}% vs last month
                </span>
              </motion.div>

              {/* Description */}
              <p className="text-center text-sm text-[#486776] max-w-xs">
                Composite intelligence metric reflecting overall institutional health (0–100), refreshed in near real-time.
                AI continuously predicts risks and improvement areas.

              </p>
            </div>

            {/* Right - Score Components */}
            <div>
              <h4 className="text-xl font-bold text-[#486776] mb-6">Score Components</h4>
              <div className="space-y-6">
                {scoreComponents.map((component, index) => (
                  <motion.div
                    key={component.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-md font-normal text-[#486776]">
                        {component.label}
                      </span>
                      <span className="text-md font-bold text-[#486776]">
                        {component.score}/{component.max}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#486776] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(component.score / component.max) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 + index * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Score Properties */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-16 h-16 bg-[#486776] rounded-lg flex items-center justify-center mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" width="33" height="25" viewBox="0 0 33 25" fill="none">
  <line x1="1" y1="3" x2="32" y2="3" stroke="white" stroke-width="2" stroke-linecap="round"/>
  <line x1="1" y1="13" x2="32" y2="13" stroke="white" stroke-width="2" stroke-linecap="round"/>
  <line x1="1" y1="22" x2="32" y2="22" stroke="white" stroke-width="2" stroke-linecap="round"/>
  <circle cx="23" cy="13" r="3" fill="white"/>
  <circle cx="11" cy="22" r="3" fill="white"/>
  <circle cx="11" cy="3" r="3" fill="white"/>
</svg>
            </div>
            <h5 className="text-lg font-bold text-black mb-4">Score Properties</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#E4A677] mt-1">•</span>
                <span>Weighted & Normalized: Algorithm adjusts for campus size and type.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E4A677] mt-1">•</span>
                <span>Hierarchical Drill-down: View from Network → Campus → Dept → Class.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E4A677] mt-1">•</span>
                <span>Transparent: Users can see exactly which factors impacted the score.</span>
              </li>
            </ul>
          </div>

          {/* Benchmarking */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-16 h-16 bg-[#486776] rounded-xl flex items-center justify-center mb-4">
           <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <path d="M36 19C36 28.3888 28.3888 36 19 36M36 19C36 9.61116 28.3888 2 19 2M36 19H29.2M19 36C9.61116 36 2 28.3888 2 19M19 36V29.2M2 19C2 9.61116 9.61116 2 19 2M2 19H8.8M19 2V8.8" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
            <h5 className="text-lg font-bold text-black mb-4">Benchmarking</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Compare against historical performance (MoM, YoY).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Rank campuses within a multi-site network.</span>
              </li>
            </ul>
          </div>

          {/* Powered by AI */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-16 h-16 bg-[#486776] rounded-xl flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 41 42" fill="none">
  <path d="M34.7612 10.1275C38.0365 11.5326 38.7144 15.4324 36.9956 18.3764C41.56 20.852 40.9298 28.3935 35.7065 29.5214C37.0625 33.3925 34.4461 37.2254 30.2732 36.8909C29.8626 42.1671 21.8034 42.6737 21.1541 37.2828C20.8199 34.4917 21.1923 30.611 21.1541 27.6671C21.0968 21.588 21.1732 15.5184 21.1541 9.42023C21.1445 6.6961 20.2374 2.88233 22.7392 0.941989C25.6134 -1.29466 29.7003 0.722147 30.2541 4.15359C33.4435 4.42122 35.5633 6.89683 34.7517 10.1275H34.7612Z" fill="white"/>
  <path d="M3.07813 18.4529C1.34023 15.4707 2.02775 11.5709 5.31256 10.1276C4.49136 7.01158 6.59211 4.32569 9.77189 4.20143C10.6313 -1.06521 18.0985 -1.54313 18.9197 3.98159V37.1299C18.0889 42.6928 10.6217 42.2531 9.64775 36.9578C5.60858 37.0725 3.13542 33.4881 4.29083 29.6744C-0.693674 28.1259 -1.63901 20.9572 3.06858 18.4625L3.07813 18.4529Z" fill="white"/>
</svg>
            </div>
            <h5 className="text-lg font-bold text-black mb-4">Powered by AI</h5>
            <p className="text-sm text-gray-700">
              The scoring engine uses predictive modeling to forecast future scores based on current trends, alerting leadership to risks before they impact the bottom line.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default KeyEdScore