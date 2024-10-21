import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-green-900 text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          The rate drop you’ve been waiting for
        </h1>
        <div className="flex justify-center mt-8">
          <Image 
            src="/rate-drop-notify.jpg" 
            alt="Phone with rate drop alert" 
            width={200} 
            height={400} 
            className="max-w-xs md:max-w-md"
          />
        </div>
        <Link href="/start" className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full">
          Start my approval
        </Link>
        <p className="mt-4 text-sm">3 min | No credit impact</p>
      </div>
    </section>
  );
};

export default HeroSection;
