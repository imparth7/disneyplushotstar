'use client'

import React, { useState, useEffect, useRef } from 'react'
import { TrendingShow } from './../api/TrendingShow';
import Image from 'next/image';

let PosterWidth = 1080
let NameWidth = 100

const HomeCrousel = () => {
    PosterWidth = 1080 / 16

    const [data, setData] = useState(TrendingShow[0])
    let count = useRef(0)
    // useEffect(() => {
    //     setData(TrendingShow[0])
    // }, [])

    useEffect(() => {
        if (count.current < TrendingShow.length-1) {
            count.current = count.current + 1
        } else { count.current = 0 }
        setTimeout(() => {
            setData(TrendingShow[count.current])
        }, 5000);
    })


    return (
        <div className={`w-full h-[90vh] relative flex flex-col items-center`}>
            <div className={`flex w-full h-full bg-gradient-to-r from-bgTheme from-15% via-bgThemeColor-500 via-30%`}>
                <div className="flex flex-col h-full items-center justify-center gap-10 w-2/6 absolute top-0 left-0 z-10">
                    <Image
                        className={`object-contain w-auto h-auto`}
                        src={data.name}
                        alt=''
                        width={NameWidth * 3}
                        height={NameWidth * 1}
                        priority
                    />
                    <div className="content flex flex-col gap-5">
                        <p className={`flex flex-wrap font-semibold [&>*]:after:content-['•'] [&>*]:after:text-neutral-500 [&>*]:after:px-2 [&>*:last-child]:after:content-[''] [&>*:last-child]:after:px-0`}>
                            <span>{data.year}</span>
                            <span>
                                {data.season ? `${data.season} Seasons` : `${data.time}`}
                            </span>
                            <span>
                                {`${data.languages} Languages`}
                            </span>
                            <span className={`px-2 py-.5 bg-[#64748b40] rounded`}>
                                {data.type}
                            </span>
                        </p>
                        <p className={``}>{data.description}</p>
                        <p className={`flex gap-3 flex-wrap`}>{data.genres.map((item) => <span className={`bg-[#64748b40] px-2 py-.5 rounded-md`} key={item}>{item}</span>)}</p>
                    </div>
                </div>
                <div className="absolute right-0 top-0 w-fit h-fit bg-gradient-to-t from-bgTheme">
                    <Image
                        className={`object-cover aspect-video relative -z-20 w-auto h-auto`}
                        src={data.poster}
                        alt=''
                        width={PosterWidth * 16}
                        height={PosterWidth * 9}
                        priority
                    />
                </div>
            </div>
            <div className="flex gap-3 absolute bottom-0 z-30">
                {TrendingShow.map((item, index): React.ReactNode => {
                    return <div className={`rounded-lg overflow-hidden transistion-all ease-linear hover:scale-110 hover:cursor-pointer`} key={index}>
                        <Image
                            className={`object-cover rounded-lg w-auto h-auto transistion-all border-2 border-transparent ${data.name == item.name && 'border-white'}`}
                            src={item.banner}
                            alt={''}
                            width={100}
                            height={50}
                            onClick={() => setData(TrendingShow[index])}
                        />
                    </div>
                })}
            </div>
        </div>
    )
}

export default HomeCrousel