Primary Color:    #486776 (borders, backgrounds)
Secondary Color:  #E5A97C (hover states, accents)
Text Colors:      Black & White

// Primary backgrounds
bg-primary          // #486776
bg-primary-dark     // #3a5360
bg-primary-light    // #5a7b8c

// Secondary backgrounds  
bg-secondary        // #E5A97C
bg-secondary-dark   // #d89560
bg-secondary-light  // #ebb98e

// Neutral backgrounds
bg-bg-white         // #ffffff
bg-bg-gray          // #F1F1F1
bg-bg-gray-light    // #F4F4F4

// Or use standard Tailwind
bg-white
bg-gray-50


// Text colors
text-text-black      // #000000
text-text-white      // #ffffff
text-text-gray       // #374151
text-text-gray-light // #6b7280

// Or use standard Tailwind
text-black
text-white
text-gray-900


// Primary border
border-border-primary    // #486776
border-primary           // #486776 (shorthand)

// Secondary/Hover border
border-border-secondary  // #E5A97C
border-secondary         // #E5A97C (shorthand)

// Neutral borders
border-border-light      // #e5e7eb
border-border-medium     // #d1d5db

// Or use standard Tailwind
border-gray-200
border-gray-300

//Card with Primary Border, Hover Secondary
<div className="border border-primary hover:border-secondary bg-white rounded-xl p-6 transition-colors">
  Card Content
</div>


//Button - Primary Background

<button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors">
  Click Me
</button>


//Button - Secondary Background

<button className="bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-lg transition-colors">
  Secondary Action
</button>


//Icon Box with Hover Effect

<div className="w-14 h-14 bg-primary group-hover:bg-secondary rounded-xl flex items-center justify-center transition-colors">
  <Icon className="text-white" />
</div>

//Card Border Hover Effect
<div className="border-[0.3px] border-primary hover:border-2 hover:border-secondary hover:shadow-lg transition-all">
  Hover me
</div>