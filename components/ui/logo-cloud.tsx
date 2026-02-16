import React from 'react';
import { InfiniteSlider } from "./infinite-slider";
import { ProgressiveBlur } from "./progressive-blur";

export type Logo = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
    logos: Logo[];
};

export const LogoCloud = React.memo(function LogoCloud({ logos }: LogoCloudProps) {
    return (
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-12">

            <div className="mb-8 text-center">
                <p className="text-slate-400 uppercase tracking-widest text-xs font-bold">
                    Líderes destas empresas confiam na Wise Wolf
                </p>
            </div>

            <div className="relative">
                <InfiniteSlider gap={60} reverse speed={30} speedOnHover={10}>
                    {logos.map((logo) => (
                        <img
                            alt={logo.alt}
                            className="pointer-events-none h-12 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300 select-none"
                            key={`logo-${logo.alt}`}
                            loading="lazy"
                            src={logo.src}
                        />
                    ))}
                </InfiniteSlider>

                <ProgressiveBlur
                    blurIntensity={0.5}
                    className="pointer-events-none absolute top-0 left-0 h-full w-[100px] z-10 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent"
                    direction="left"
                />
                <ProgressiveBlur
                    blurIntensity={0.5}
                    className="pointer-events-none absolute top-0 right-0 h-full w-[100px] z-10 bg-gradient-to-l from-navy-900 via-navy-900/80 to-transparent"
                    direction="right"
                />
            </div>

        </div>
    );
});
