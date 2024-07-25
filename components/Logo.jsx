import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/muja01.svg' width={150} height={150} priority alt='' />
    </Link>
  );
};

export default Logo;
