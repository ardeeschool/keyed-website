'use client'

import { motion } from 'framer-motion'

interface ModuleCategory {
  id: string
  number: string
  title: string
  description: string
  tags: string[]
  icon?: React.ReactNode
}

const categories: ModuleCategory[] = [
  {
    id: 'core',
    number: '01',
    title: 'Academic & Experience Layer',
    description: 'Essential modules for the daily teaching and learning lifecycle, connecting students, teachers, and parents.',
    tags: ['Access', 'Enroll', 'Teach', 'Learner', 'Family'],
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="46" height="28" viewBox="0 0 46 28" fill="none">
  <path d="M44.6845 10.9127L44.6865 19.1905C44.8159 19.2822 44.9357 19.3945 45.042 19.5182C45.3743 19.9123 45.5791 20.4576 45.5791 21.0578C45.5791 21.6581 45.3743 22.2034 45.042 22.5975C44.928 22.7327 44.7985 22.8495 44.6594 22.9458L45.5868 25.8051C45.7569 26.3321 45.5327 26.9232 45.0884 27.1248C44.7502 27.2784 43.164 27.1959 42.708 27.1959C42.2288 27.1959 41.8424 26.7353 41.8424 26.1694C41.8424 25.7112 42.6462 23.514 42.8316 22.9435C42.6906 22.8472 42.5611 22.7304 42.4472 22.5952C42.1168 22.2011 41.91 21.6558 41.91 21.0555C41.91 20.4553 42.1168 19.91 42.4472 19.5159C42.594 19.3418 42.766 19.1974 42.9572 19.0897V11.4577L44.6884 10.9078L44.6845 10.9127ZM22.9345 9.25394C22.4592 9.2127 22.1017 8.72009 22.1365 8.15418C22.1713 7.59055 22.5867 7.16668 23.0639 7.20791L43.7278 9.04542L46 8.23207L23 0L0 8.23207L23 16.4641L39.1218 10.695L22.9362 9.25616L22.9345 9.25394ZM37.2301 13.5109L23.2456 18.5171C23.0794 18.5767 22.9075 18.5721 22.751 18.5171L8.35296 13.3643V22.2492C13.2393 26.0823 18.0852 28 22.8885 28C27.684 28 32.4659 26.0823 37.2286 22.2537V13.5131L37.2301 13.5109Z" fill="white"/>
</svg>
  },
  {
    id: 'operations',
    number: '02',
    title: 'Campus Operations',
    description: 'The administrative backbone managing physical and digital assets, logistics, and compliance.',
    tags: ['Infra', 'People', 'Finance', 'Tech', 'Transit', 'Library', 'Events'],
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="42" viewBox="0 0 40 42" fill="none">
  <path d="M7.3 20L6.9 16.8C6.68333 16.7167 6.47917 16.6167 6.2875 16.5C6.09583 16.3833 5.90833 16.2583 5.725 16.125L2.75 17.375L0 12.625L2.575 10.675C2.55833 10.5583 2.55 10.4458 2.55 10.3375V9.6625C2.55 9.55417 2.55833 9.44167 2.575 9.325L0 7.375L2.75 2.625L5.725 3.875C5.90833 3.74167 6.1 3.61667 6.3 3.5C6.5 3.38333 6.7 3.28333 6.9 3.2L7.3 0H12.8L13.2 3.2C13.4167 3.28333 13.6208 3.38333 13.8125 3.5C14.0042 3.61667 14.1917 3.74167 14.375 3.875L17.35 2.625L20.1 7.375L17.525 9.325C17.5417 9.44167 17.55 9.55417 17.55 9.6625V10.3375C17.55 10.4458 17.5333 10.5583 17.5 10.675L20.075 12.625L17.325 17.375L14.375 16.125C14.1917 16.2583 14 16.3833 13.8 16.5C13.6 16.6167 13.4 16.7167 13.2 16.8L12.8 20H7.3ZM10.1 13.5C11.0667 13.5 11.8917 13.1583 12.575 12.475C13.2583 11.7917 13.6 10.9667 13.6 10C13.6 9.03333 13.2583 8.20833 12.575 7.525C11.8917 6.84167 11.0667 6.5 10.1 6.5C9.11667 6.5 8.2875 6.84167 7.6125 7.525C6.9375 8.20833 6.6 9.03333 6.6 10C6.6 10.9667 6.9375 11.7917 7.6125 12.475C8.2875 13.1583 9.11667 13.5 10.1 13.5Z" fill="white"/>
  <path d="M22.4928 42L21.9754 37.84C21.6952 37.7317 21.4311 37.6017 21.1831 37.45C20.9352 37.2983 20.6927 37.1358 20.4555 36.9625L16.6073 38.5875L13.05 32.4125L16.3809 29.8775C16.3593 29.7258 16.3486 29.5796 16.3486 29.4388V28.5612C16.3486 28.4204 16.3593 28.2742 16.3809 28.1225L13.05 25.5875L16.6073 19.4125L20.4555 21.0375C20.6927 20.8642 20.9406 20.7017 21.1993 20.55C21.458 20.3983 21.7167 20.2683 21.9754 20.16L22.4928 16H29.6073L30.1247 20.16C30.4049 20.2683 30.669 20.3983 30.917 20.55C31.1649 20.7017 31.4074 20.8642 31.6446 21.0375L35.4928 19.4125L39.0501 25.5875L35.7192 28.1225C35.7408 28.2742 35.7515 28.4204 35.7515 28.5612V29.4388C35.7515 29.5796 35.73 29.7258 35.6869 29.8775L39.0177 32.4125L35.4605 38.5875L31.6446 36.9625C31.4074 37.1358 31.1595 37.2983 30.9008 37.45C30.6421 37.6017 30.3834 37.7317 30.1247 37.84L29.6073 42H22.4928ZM26.1147 33.55C27.3651 33.55 28.4323 33.1058 29.3162 32.2175C30.2001 31.3292 30.6421 30.2567 30.6421 29C30.6421 27.7433 30.2001 26.6708 29.3162 25.7825C28.4323 24.8942 27.3651 24.45 26.1147 24.45C24.8428 24.45 23.7702 24.8942 22.8971 25.7825C22.0239 26.6708 21.5874 27.7433 21.5874 29C21.5874 30.2567 22.0239 31.3292 22.8971 32.2175C23.7702 33.1058 24.8428 33.55 26.1147 33.55Z" fill="white"/>
</svg>
  },
  {
    id: 'intelligence',
    number: '03',
    title: 'AI & Analytics',
    description: 'Advanced decision-making support powered by AI, analytics, and the proprietary KeyEd Score.',
    tags: ['Leadership', 'Intelligence Core', 'KeyEd Score Metric'],
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 41 42" fill="none">
  <path d="M34.7612 10.1275C38.0365 11.5326 38.7144 15.4324 36.9956 18.3764C41.56 20.852 40.9298 28.3935 35.7065 29.5214C37.0625 33.3925 34.4461 37.2254 30.2732 36.8909C29.8626 42.1671 21.8034 42.6737 21.1541 37.2828C20.8199 34.4917 21.1923 30.611 21.1541 27.6671C21.0968 21.588 21.1732 15.5184 21.1541 9.42023C21.1445 6.6961 20.2374 2.88233 22.7392 0.941989C25.6134 -1.29466 29.7003 0.722147 30.2541 4.15359C33.4435 4.42122 35.5633 6.89683 34.7517 10.1275H34.7612Z" fill="white"/>
  <path d="M3.07813 18.4529C1.34023 15.4707 2.02775 11.5709 5.31256 10.1276C4.49136 7.01158 6.59211 4.32569 9.77189 4.20143C10.6313 -1.06521 18.0985 -1.54313 18.9197 3.98159V37.1299C18.0889 42.6928 10.6217 42.2531 9.64775 36.9578C5.60858 37.0725 3.13542 33.4881 4.29083 29.6744C-0.693674 28.1259 -1.63901 20.9572 3.06858 18.4625L3.07813 18.4529Z" fill="white"/>
</svg>
  },
  {
    id: 'growth',
    number: '04',
    title: 'Admissions & Marketing Growth',
    description: 'Tools to expand reach, improve enrollment yield, and foster a thriving educational community.',
    tags: ['Marketing', 'Marketplace'],
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="39" height="41" viewBox="0 0 39 41" fill="none">
  <path d="M30.3413 25.0793C30.231 25.2049 29.874 25.5083 29.8688 25.6496L30.2993 29.9295C30.4253 32.6973 29.9948 33.7752 27.9734 35.5802C26.4876 36.9092 24.6343 38.2696 22.949 39.3369C22.4818 39.6352 20.8647 40.6502 20.4342 40.7444C19.9774 40.8386 19.2686 40.6868 19.1846 40.1427C19.1006 39.5985 19.1531 38.9864 19.1059 38.4841C18.8959 36.1035 18.7016 33.7228 18.4181 31.3474C15.7405 28.5692 12.8477 25.9949 9.75007 23.6875C6.76272 23.7974 3.81212 24.1375 0.830022 24.2526C0.347006 24.1846 -0.015256 23.5986 0.000494556 23.1329C0.0162451 22.7719 1.11353 20.7471 1.36554 20.2919C2.52058 18.1833 5.29792 13.5424 7.5345 12.6791C8.55828 12.2867 10.5166 12.2291 11.6611 12.1559C12.5589 12.0983 13.483 12.1402 14.386 12.046L16.5281 9.55025C20.5864 5.06629 25.2906 1.42994 31.4491 0.373039C33.0189 0.106199 35.5337 -0.113552 37.0983 0.0643415C37.5445 0.116663 37.8228 0.27886 38.0065 0.676504C38.3793 1.47179 38.6996 3.46001 38.8046 4.37041C39.8336 13.3226 35.8382 18.785 30.3465 25.0845L30.3413 25.0793ZM31.7273 8.11664C28.6717 5.15523 23.8521 9.39852 26.5244 12.7628C29.5747 16.6084 35.2502 11.5332 31.7273 8.11664Z" fill="white"/>
  <path d="M12.2491 27.7482C13.5512 28.8626 15.058 30.1916 16.1973 31.4526C16.2865 31.552 16.5228 31.531 16.3863 31.7037C16.2498 31.8764 15.331 32.4362 15.2522 32.4624C15.1735 32.4885 15.1157 32.5252 15.0422 32.4624L9.26178 27.3505C9.17252 27.1465 9.65554 26.1576 9.79205 25.9274C9.92855 25.6972 9.77104 25.8071 9.9128 25.8385C10.6793 26.4925 11.4826 27.0994 12.2439 27.7534L12.2491 27.7482Z" fill="white"/>
</svg>
  },
]

const ModuleCategories = () => {
  return (
    <section className="py-10 md:py-20 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-8xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-bold text-black mb-4 font-arabic">
            Module Categories
          </h2>
          <div className="w-32 h-1 bg-[#f15a24] mx-auto"></div>
        </motion.div>

        {/* Categories Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-16">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface CategoryCardProps {
  category: ModuleCategory
  index: number
}

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="h-full p-8 bg-white border-[0.3px] border-[#486776] rounded-[14px] hover:border-1 hover:border-[#f15a24] shadow-[3px_7px_11px_0_rgba(0,0,0,0)] hover:shadow-[3px_7px_11px_0_rgba(0,0,0,0.13)] transition-all duration-300">
        {/* Number in top right corner */}
        <div className="absolute top-6 right-6 text-7xl font-bold text-[#F4F4F4] font-arabic">
          {category.number}
        </div>

        {/* Icon */}
        <div className="mb-6 relative z-10">
          <div className="w-16 h-16 rounded-xl bg-[#486776] group-hover:bg-[#f15a24] flex items-center justify-center transition-colors duration-300">
            {/* Placeholder for icon - replace with your SVG */}
            {category.icon ? (
              category.icon
            ) : (
              <div className="w-8 h-8 bg-white/20 rounded" />
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold text-black mb-4 relative z-10">
          {category.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-6 leading-relaxed relative z-10">
          {category.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 relative z-10">
          {category.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-2 text-xs font-medium text-black bg-[#F4F4F4] border border-[#486776] rounded-full hover:border-gray-400 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ModuleCategories