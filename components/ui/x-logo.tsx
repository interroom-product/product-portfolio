interface XLogoProps {
  className?: string;
  size?: number;
}

export function XLogo({ className = "", size = 24 }: XLogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 1000 1000" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M755.043 234.803L546.633 443.214L982.822 879.402H854.784L492.248 516.866L186.347 822.768H66.335L288.354 600.749L0 312.396H128.4L462.684 646.681L743.144 366.222H863.156L640.775 588.603L930.012 879.402H1000L755.043 234.803ZM813.86 345.004H746.045L189.512 901.537H257.326L813.86 345.004Z"
        fill="currentColor"
      />
    </svg>
  );
}
