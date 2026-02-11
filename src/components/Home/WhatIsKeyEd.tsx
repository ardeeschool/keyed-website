'use client'

import { motion } from 'framer-motion'
import { Database, Users, Sparkles, Clock, Building2 } from 'lucide-react'

const features = [
  {
    id: 'database',
      number: '01',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9.78751 13.1074C10.2626 13.7431 10.8687 14.2692 11.5647 14.6498C12.2608 15.0305 13.0305 15.2569 13.8216 15.3136C14.6127 15.3703 15.4068 15.256 16.1499 14.9785C16.893 14.7011 17.5679 14.2668 18.1286 13.7053L21.4473 10.3833C22.4549 9.33901 23.0124 7.9404 22.9998 6.48868C22.9872 5.03695 22.4055 3.64825 21.3799 2.62169C20.3544 1.59512 18.9671 1.01282 17.5168 1.00021C16.0666 0.987594 14.6694 1.54567 13.6262 2.55424L11.7234 4.44782M14.2125 10.8926C13.7374 10.2569 13.1313 9.73082 12.4353 9.35016C11.7392 8.9695 10.9695 8.74313 10.1784 8.68642C9.38728 8.6297 8.59323 8.74396 7.8501 9.02145C7.10697 9.29894 6.43215 9.73316 5.87141 10.2947L2.55268 13.6167C1.54512 14.661 0.987607 16.0596 1.00021 17.5113C1.01281 18.9631 1.59452 20.3517 2.62006 21.3783C3.64559 22.4049 5.03289 22.9872 6.48316 22.9998C7.93342 23.0124 9.33062 22.4543 10.3738 21.4458L12.2655 19.5522" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>,
    iconBg: '#E8A87C',
    title: 'One Unified Database',
    description: 'Single source of truth for all modules',
  },
  {
    id: 'dashboards',
      number: '02',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
  <path d="M2.06123 12.9988C4.17464 11.0155 7.77472 10.7146 10.5209 11.2924C10.8116 11.3526 11.6049 11.5061 11.7079 11.801C11.832 12.1652 11.838 12.8995 11.9228 13.3358C12.3013 15.3041 13.0916 16.9262 14.5389 18.3256C14.7175 18.5001 15.3715 18.8854 15.2928 19.1291L15.0385 19.3037H0.28087C0.220313 19.2615 0.114339 19.2044 0.0780055 19.1442C-0.103664 18.8372 0.0780059 16.9623 0.159757 16.5079C0.417121 15.1415 1.05296 13.9468 2.0582 13.0018L2.06123 12.9988Z" fill="white"/>
  <path d="M4.59241 1.35495C6.9753 -0.992457 11.1113 -0.179893 12.3164 2.94397C13.8606 6.95562 9.8487 10.6994 5.92465 8.93587C2.98766 7.6147 2.30943 3.60304 4.59241 1.35495Z" fill="white"/>
  <path d="M17.6454 7.91554C17.8119 7.8704 17.9694 7.89447 18.1298 7.94563C18.4235 8.04194 19.0715 8.52647 19.4257 8.70403C20.1585 9.07721 20.9154 9.34505 21.7087 9.56775C22.3173 9.73929 22.9198 9.59785 22.9955 10.3954C23.0652 11.1297 22.8835 12.5863 22.7321 13.3326C22.2386 15.7733 20.6702 18.0575 18.3266 19.0748C17.7211 19.3366 17.4728 19.1289 16.9308 18.834C14.1937 17.3353 12.925 14.6388 12.7464 11.6052C12.7252 11.2471 12.6676 10.0523 12.9311 9.85666C13.1945 9.66105 14.342 9.50455 14.7023 9.38718C15.1656 9.23671 15.7712 8.98993 16.2072 8.77325C16.5523 8.6017 17.385 7.98175 17.6423 7.91253L17.6454 7.91554ZM17.8452 9.34505L16.0406 10.2329C15.75 10.3081 15.4744 10.4435 15.1898 10.5308C14.9052 10.6181 14.1059 10.7565 14.0241 10.8167C13.906 10.904 14.0059 11.8249 14.0241 12.0235C14.2875 14.5455 15.423 16.7875 17.8422 17.8378V9.34204L17.8452 9.34505Z" fill="white"/>
</svg>,
    iconBg: '#4A5568',
    title: 'Role-based Dashboards',
    description: 'Tailored views for Students, Teachers, Parents, Admin',
  },
  {
    id: 'workflows',
      number: '03',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
  <path d="M17.4398 8.39457L16.6586 8.3782C16.349 6.51456 14.7569 5.09092 12.8392 5.09092L10.2039 5.10183V4.23636C11.0219 3.93636 11.6113 3.12909 11.6113 2.18182C11.6113 0.978178 10.6648 0 9.50017 0C8.33553 0 7.38905 0.978178 7.38905 2.18182C7.38905 3.12909 7.9784 3.93638 8.79646 4.23636V5.10909L6.28068 5.12C4.24168 5.12 2.62658 6.69455 2.47705 8.75637H1.57455C0.705464 8.75637 0 9.48728 0 10.3837V12.9183C0 13.8165 0.707221 14.5456 1.57455 14.5456H2.46298V19.2727C2.46298 19.5418 2.60548 19.7873 2.83417 19.9145C2.93797 19.9709 3.05232 20 3.16669 20C3.30391 20 3.43936 19.9582 3.55725 19.8782L6.54795 17.8182L12.8689 17.7909C14.8745 17.7909 16.5246 16.1963 16.6971 14.1692L17.4255 14.1856C18.2945 14.1856 19 13.4237 19 12.4892V10.0909C19 9.15456 18.2945 8.39454 17.4395 8.39454L17.4398 8.39457ZM6.17344 9.81821C6.17344 9.12547 6.71882 8.56185 7.38909 8.56185C8.05936 8.56185 8.60474 9.12549 8.60474 9.81821C8.60474 10.5109 8.05936 11.0746 7.38909 11.0746C6.71882 11.0746 6.17344 10.5109 6.17344 9.81821ZM10.9075 14.3636H8.09271C7.7039 14.3636 7.389 14.0382 7.389 13.6363C7.389 13.2345 7.7039 12.9091 8.09271 12.9091H10.9075C11.2963 12.9091 11.6112 13.2345 11.6112 13.6363C11.6112 14.0382 11.2963 14.3636 10.9075 14.3636ZM11.6112 11.0891C10.9322 11.0891 10.3815 10.5182 10.3815 9.81823C10.3815 9.11823 10.9339 8.54733 11.6112 8.54733C12.2886 8.54733 12.841 9.11823 12.841 9.81823C12.841 10.5182 12.2903 11.0891 11.6112 11.0891Z" fill="white"/>
</svg>,
    iconBg: '#4A5568',
    title: 'AI-assisted Workflows',
    description: 'Automation for grading, admissions, and scheduling',
  },
  {
    id: 'analytics',
      number: '04',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7062 0C15.683 0.340934 19.659 4.31685 20 9.29363H10.7062V0ZM20 10.6819C19.8455 12.9237 18.9551 14.9644 17.5644 16.5587L11.6875 10.6819H20ZM16.5833 17.5399L9.52675 10.4835C9.39675 10.3584 9.31826 10.1818 9.31826 9.98805V0.000590134C4.11341 0.356242 0 4.69274 0 9.98805C0 15.519 4.48369 20 10.0121 20C12.5262 20 14.8245 19.0729 16.5833 17.5399Z" fill="white"/>
</svg>,
    iconBg: '#4A5568',
    title: 'Real-time Analytics',
    description: 'Instant insights across all metrics',
  },
  {
    id: 'scalability',
      number: '05',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
  <path d="M7.15008 12.3613C7.15808 12.464 7.21195 12.697 7.32517 12.6965L9.23468 12.6446C11.3259 12.7224 10.9839 14.7516 11.0096 16.3129C11.0404 18.1587 11.4702 19.7735 9.16877 19.9536C7.69733 20.0668 6.08535 19.9751 4.59835 19.9816C3.6435 19.9858 2.38441 20.3234 1.716 19.3817C1.0438 18.436 1.50857 15.9911 1.28818 14.7983C1.28526 14.1343 1.40288 13.4183 1.95974 13.0285C2.69718 12.5074 3.81577 12.8306 4.66816 12.7003L4.67069 11.5619C4.63606 11.4118 4.12659 11.422 3.98316 11.4187C2.99042 11.3914 1.88534 11.5623 0.896312 11.5192C0.681135 11.5083 0.348699 11.4387 0.20829 11.2653C-0.000436092 11.0054 -0.0274886 10.0055 0.0200767 9.6653C0.082268 9.21837 0.209682 9.01226 0.65868 8.98261C2.82443 8.83867 5.19519 8.96657 7.38412 8.94506C8.26347 8.93723 9.14648 8.90172 10.0258 8.88203C10.1692 8.8814 10.5734 8.96658 10.6447 8.86745C10.6777 8.6499 10.7228 7.74452 10.5714 7.65032L8.25021 7.64078C7.48342 7.49791 7.15663 6.99735 6.91943 6.27108C6.93986 4.91124 6.79791 3.53235 6.79948 2.17654C6.80245 1.13694 7.14182 0.2105 8.24706 0.075187C9.3372 -0.0600594 10.8626 0.0834227 11.9986 0.0784157C12.7836 0.0749557 13.6287 -0.0078244 14.4175 0.000557066C16.8973 0.0252024 16.5349 1.7344 16.5813 3.69477C16.6 4.50105 16.7841 6.02206 16.4475 6.72714C15.8604 7.95508 14.2053 7.50386 13.1491 7.635L13.0894 7.80128L13.1468 8.8327C13.6716 8.86597 14.2076 8.88337 14.7322 8.88501C17.5931 8.88821 20.457 8.74514 23.3141 8.75232C23.8391 8.84092 23.9118 9.06195 23.967 9.58347C24.0299 10.1603 24.0794 11.1246 23.3742 11.2463L19.585 11.263L19.4457 11.3466L19.4773 12.5204L21.5832 12.5032C23.4978 12.7359 23.0938 15.2872 23.1003 16.7458C23.1074 18.3703 23.3281 19.6382 21.3209 19.7735C20.0116 19.8584 18.6035 19.7934 17.2826 19.8032C15.505 19.815 13.6621 20.4121 13.4999 17.879C13.4353 16.9069 13.3672 15.1641 13.4386 14.227C13.6028 12.1036 15.5188 12.6643 16.9525 12.5553L16.917 11.3459L7.20618 11.3887C7.21885 11.693 7.12613 12.0649 7.15007 12.3573L7.15008 12.3613ZM14.1876 5.21133L14.1338 2.41695L9.30665 2.42637L9.3115 5.24072L14.1838 5.20739L14.1876 5.21133ZM20.6843 14.9184L15.9137 14.9275L15.8431 15.1611L15.9059 17.4297L20.6538 17.4167L20.7209 17.2424L20.6843 14.9184ZM3.75766 17.6295L8.58458 17.5687L8.58891 15.1258C8.47861 14.9326 7.11674 15.073 6.84878 15.0742C5.81092 15.0827 4.77298 15.0755 3.73901 15.1116L3.75768 17.6334L3.75766 17.6295Z" fill="white"/>
</svg>,
    iconBg: '#4A5568',
    title: 'Multi-campus Scalability',
    description: 'Centralized control for distributed campuses',
  },
]

const WhatIsKeyEd = () => {
  return (
    <section className="py-10 lg:py-20 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-8xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-4 font-arabic">
            What is KeyEd?
          </h2>
          <div className="w-32 h-1 bg-[#E8A87C] mx-auto mb-8"></div>
          <p className="text-sm md:text-xl text-black max-w-4xl mx-auto leading-relaxed font-montserrat">
            KeyEd is a unified operating system for modern institutions. It replaces fragmented tools
            with a single, intelligent platform that seamlessly connects admissions, learning,
            operations, and growth.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-6">
          {/* Top Row - 3 Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                whileHover={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                  className="group relative"
              >
                 <div className="flex items-start gap-4 p-4 rounded-xl border-[0.3px] border-[#486776] bg-white  hover:border-1 hover:border-[#E4A677] shadow-[3px_7px_11px_0_rgba(0,0,0,0)] hover:shadow-[3px_7px_11px_0_rgba(0,0,0,0.13)] transition-all duration-300">

                 <div className="absolute top-0 right-6 text-4xl md:text-6xl font-bold text-[#F4F4F4] font-arabic">
                    {feature.number}
                    </div>
                <div
                  className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14  rounded-full flex items-center justify-center text-white bg-[#486776] transition-all duration-300 group-hover:bg-[#E5A97C]"
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-md md:text-xl font-semibold text-black mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-black text-xs leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
                 </div>
              </motion.div>
               
            ))}
          </motion.div>

          {/* Bottom Row - 2 Cards Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-6 max-w-4xl mx-auto mt-0 md:mt-8 lg:mt-16"
          >
            {features.slice(3, 5).map((feature, index) => (
              <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                    className="group relative"
              >
                 <div className="flex items-start gap-4 p-4 rounded-xl border-[0.3px] border-[#486776] bg-white  hover:border-1 hover:border-[#E4A677] shadow-[3px_7px_11px_0_rgba(0,0,0,0)] hover:shadow-[3px_7px_11px_0_rgba(0,0,0,0.13)] transition-all duration-300">
                      <div className="absolute top-0 right-6  text-4xl md:text-6xl font-bold text-[#F4F4F4] font-arabic">
                    {feature.number}
                    </div>
  <div
    className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white bg-[#486776] transition-all duration-300 group-hover:bg-[#E5A97C]"
  >
    {feature.icon}
  </div>

  <div>
    <h3 className="text-md md:text-xl font-semibold text-black mb-1">
      {feature.title}
    </h3>
    <p className="text-black text-xs leading-relaxed font-medium">
      {feature.description}
    </p>
  </div>
    </div>
</motion.div>

            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsKeyEd