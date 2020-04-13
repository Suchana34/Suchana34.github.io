import React from 'react'
import anime from 'animejs/lib/anime.es'
import { useColorMode, jsx} from "theme-ui";
import { hidden } from "../styles/utils"


const icon = {
    moon: {
    shape: (
      <React.Fragment>
        <path d="M28.2886 56.2348C43.9119 56.2348 56.5772 43.7879 56.5772 28.434C56.5772 13.08 43.9119 0.633095 28.2886 0.633095C12.6652 0.633095 0 13.08 0 28.434C0 43.7879 12.6652 56.2348 28.2886 56.2348Z" fill="#6C63FF"/>
        <path d="M29 57C45.0163 57 58 44.2401 58 28.5C58 12.7599 45.0163 0 29 0C12.9837 0 0 12.7599 0 28.5C0 44.2401 12.9837 57 29 57Z" fill="url(#paint0_linear)"/>
        <path opacity="0.05" d="M20.2262 28.432C22.1669 28.432 23.7402 26.8859 23.7402 24.9786C23.7402 23.0713 22.1669 21.5252 20.2262 21.5252C18.2854 21.5252 16.7122 23.0713 16.7122 24.9786C16.7122 26.8859 18.2854 28.432 20.2262 28.432Z" fill="black"/>
        <path opacity="0.05" d="M40.9186 30.8989C44.8867 30.8989 48.1034 27.7376 48.1034 23.8379C48.1034 19.9383 44.8867 16.777 40.9186 16.777C36.9505 16.777 33.7338 19.9383 33.7338 23.8379C33.7338 27.7376 36.9505 30.8989 40.9186 30.8989Z" fill="black"/>
        <path opacity="0.05" d="M21.7736 45.209C23.7143 45.209 25.2876 43.6629 25.2876 41.7556C25.2876 39.8483 23.7143 38.3022 21.7736 38.3022C19.8329 38.3022 18.2596 39.8483 18.2596 41.7556C18.2596 43.6629 19.8329 45.209 21.7736 45.209Z" fill="black"/>
        <defs>
        <linearGradient id="paint0_linear" x1="29" y1="57" x2="29" y2="0" gradientUnits="userSpaceOnUse">
        <stop stop-color="#808080" stop-opacity="0.25"/>
        <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
        <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
        </linearGradient>
        </defs>

      </React.Fragment>
    ),
    viewBox: `0 0 58 57`,
    },
    sun: {
      shape: (
        <React.Fragment>

            <path d="M31.482 11.9529L29 0L26.518 11.9529H29H31.482Z" fill="#F7A663"/>
            <path d="M20.8023 14.0358L22.9517 12.859L14.4998 3.68425L18.6529 15.2126L20.8023 14.0358Z" fill="#FFC80A"/>
            <path d="M14.8014 19.7266L16.0421 17.6881L3.88521 13.7499L13.5601 21.7649L14.8014 19.7266Z" fill="#F7A663"/>
            <path d="M12.6046 27.4997L12.6049 25.1467L0 27.4997L12.6046 29.8536V27.4997Z" fill="#FFC80A"/>
            <path d="M14.8011 35.2737L13.5604 33.2351L3.88521 41.2499L16.0418 37.3119L14.8011 35.2737Z" fill="#F7A663"/>
            <path d="M18.6532 39.7877L14.4998 51.3157L22.9517 42.1413L20.802 40.9645L18.6532 39.7877Z" fill="#FFC80A"/>
            <path d="M26.518 43.0468L29 55L31.482 43.0473H29L26.518 43.0468Z" fill="#F7A663"/>
            <path d="M37.1977 40.9645L35.0483 42.1407L43.4998 51.3157L39.3471 39.7877L37.1977 40.9645Z" fill="#FFC80A"/>
            <path d="M43.1989 35.2737L41.9576 37.3113L54.1145 41.2499L44.4392 33.2351L43.1989 35.2737Z" fill="#F7A663"/>
            <path d="M58 27.4997L45.3951 25.1464L45.3954 27.4997L45.3951 29.8533L58 27.4997Z" fill="#FFC80A"/>
            <path d="M43.1986 19.726L44.4393 21.7643L54.1145 13.7499L41.9573 17.6881L43.1986 19.726Z" fill="#F7A663"/>
            <path d="M39.3468 15.2126L43.4998 3.68425L35.0476 12.859L37.1974 14.0358L39.3468 15.2126Z" fill="#FFC80A"/>
            <path d="M29 13.2903V41.7099C37.276 41.7099 43.985 35.3479 43.985 27.5C43.985 19.652 37.276 13.2903 29 13.2903Z" fill="#FDD633"/>
            <path d="M14.0153 27.5C14.0153 35.3479 20.7243 41.7099 29 41.7099V13.2903C20.7243 13.2903 14.0153 19.6523 14.0153 27.5Z" fill="#F4CA19"/>

        </React.Fragment>
      ),
    viewBox: `0 0 58 55`,
    }
};

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: number
  left: string
  top: string
  hiddenMobile?: boolean
}

const defaultProps = {
  stroke: false,
  hiddenMobile: false,
}


const Morph = ({ stroke, color, width, left, top, hiddenMobile }: SVGProps) => {
  
    const [colorMode, setColorMode] = useColorMode()
    const isDark = colorMode === `dark`
    
    const sun_to_moon = anime.timeline(
      {
        duration: 750,
        easing: "easeOutExpo"
      }
    )
    const toggleColorMode = (e: any) => {
      setColorMode(isDark ? `light` : `dark`)
      sun_to_moon.add({
        targets: icon.sun.shape,
        d: [{value: icon.moon.shape}]
      }).add({
        targets: icon.moon.shape,
        rotate: 320
      });
    }  

    return(
        <svg
        sx={{
          position: `absolute`,
          stroke: stroke ? `currentColor` : `none`,
          fill: stroke ? `none` : `currentColor`,
          display: hiddenMobile ? hidden : `block`,
          color,
          width,
          left,
          top,
        }}
        onClick={toggleColorMode}
      >
        {isDark? icon.sun.shape: icon.moon.shape}
      </svg>
    )
}

export default Morph;
Morph.defaultProps = defaultProps
