import { ReactNode } from "react";

interface MaxWidthWrapperPropps {
  children : ReactNode,
  className? : string,
}

const MaxWidthWrapper = ({ children, className } : MaxWidthWrapperPropps) => {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};


export default MaxWidthWrapper