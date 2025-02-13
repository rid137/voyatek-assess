// import React from "react";

// interface GradientButtonProps {
//     text: string;
//     onClick?: () => void;
//     className?: string;
// }

// const GradientButton: GradientButtonProps = () => {
//   return (
//     <button className="px-6 py-3 hover:opacity-90 transition-all text-black font-semibold rounded bg-[radial-gradient(circle_at_top_left,#DEF9FA_10%,#BEF3F5_30%,#9DEDF0_50%,#7DE7EB_70%,#5CE1E6_90%,#33BBCF_100%)]">
//       Get Started
//     </button>
//   );
// };

// export default GradientButton;

import React from "react";

interface GradientButtonProps {
  text: string;
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  text,
  className = "px-6 py-3",
}) => {
  return (
    <button
    //   className={`rounded text-black font-semibold bg-[radial-gradient(circle_at_left,#DEF9FA,#BEF3F5,#9DEDF0,#7DE7EB,#5CE1E6,#33BBCF)] hover:opacity-80 transition-all ${className}`}
      className={`rounded text-black font-semibold bg-[radial-gradient(circle_at_top_left,#DEF9FA,#5CE1E6,#5CE1E6,#5CE1E6,#5CE1E6,#33BBCF)] hover:opacity-90 transition-all ${className}`}
    >
      {text}
    </button>
  );
};

export default GradientButton;
