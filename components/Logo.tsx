import Image from 'next/image';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Image 
      src="https://fsd23.com/img/logo.png" 
      alt="FSD Global Services Logo"
      width={400}
      height={120}
      className={`object-contain ${className}`}
      referrerPolicy="no-referrer"
    />
  );
}
