import Image from 'next/image'
import HomeCrousel from './components/HomeCrousel';

export default function Home() {    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between ">
            <HomeCrousel />
            {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            </div>
            <div className="border w-full h-[100vh] overflow-hidden object-cover">
                <Image
                    src={`https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/7033/1607033-i-d6f937c102ac`}
                    width={1500}
                    height={200}
                    alt=''
                />
            </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dug56u8NN7g?controls=0&amp;autoplay=true" title="YouTube video player" frameBorder={0} allow="autoplay; clipboard-write; encrypted-media;"></iframe> */}
        </main>
    )
}
