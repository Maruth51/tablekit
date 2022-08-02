import { css } from '@emotion/react';
import * as React from 'react';

import {
  buildFontFace,
  buildPreloadLink,
  FontType,
  GetCdnPathFunction
} from './buildFontFace';
import { FontWeight } from './weights';

const name = 'IBM Plex Sans';
const folder = 'IBMPlex-Sans';

export function plexSansFont(
  getCdnPath: GetCdnPathFunction,
  fontWeights: (keyof typeof FontWeight)[]
): FontType {
  const sourceSansProExtraLightWoff = getCdnPath(
    folder,
    'IBMPlexSans-ExtraLight.woff'
  );
  const sourceSansProExtraLightWoff2 = getCdnPath(
    folder,
    'IBMPlexSans-ExtraLight.woff2'
  );
  const sourceSansProExtraLightItalicWoff = getCdnPath(
    folder,
    'IBMPlexSans-ExtraLightItalic.woff'
  );
  const sourceSansProExtraLightItalicWoff2 = getCdnPath(
    folder,
    'IBMPlexSans-ExtraLightItalic.woff2'
  );

  const sourceSansProLightWoff = getCdnPath(folder, 'IBMPlexSans-Light.woff');
  const sourceSansProLightWoff2 = getCdnPath(folder, 'IBMPlexSans-Light.woff2');
  const sourceSansProLightItalicWoff = getCdnPath(
    folder,
    'IBMPlexSans-LightItalic.woff'
  );
  const sourceSansProLightItalicWoff2 = getCdnPath(
    folder,
    'IBMPlexSans-LightItalic.woff2'
  );

  const sourceSansProRegularWoff = getCdnPath(
    folder,
    'IBMPlexSans-Regular.woff'
  );
  const sourceSansProRegularWoff2 = getCdnPath(
    folder,
    'IBMPlexSans-Regular.woff2'
  );
  const sourceSansProRegularItalicWoff = getCdnPath(
    folder,
    'IBMPlexSans-Italic.woff'
  );
  const sourceSansProRegularItalicWoff2 = getCdnPath(
    folder,
    'IBMPlexSans-Italic.woff2'
  );

  const sourceSansProMediumWoff = getCdnPath(folder, 'IBMPlexSans-Medium.woff');
  const sourceSansProMediumWoff2 = getCdnPath(
    folder,
    'IBMPlexSans-Medium.woff2'
  );
  const sourceSansProMediumItalicWoff = getCdnPath(
    folder,
    'IBMPlexSans-MediumItalic.woff'
  );
  const sourceSansProMediumItalicWoff2 = getCdnPath(
    folder,
    'IBMPlexSans-MediumItalic.woff2'
  );

  const sourceSansProSemiBoldWoff = getCdnPath(
    folder,
    'IBMPlexSans-SemiBold.woff'
  );
  const sourceSansProSemiBoldWoff2 = getCdnPath(
    folder,
    'IBMPlexSans-SemiBold.woff2'
  );
  const sourceSansProSemiBoldItalicWoff = getCdnPath(
    folder,
    'IBMPlexSans-SemiBoldItalic.woff'
  );
  const sourceSansProSemiBoldItalicWoff2 = getCdnPath(
    folder,
    'IBMPlexSans-SemiBoldItalic.woff2'
  );

  const sourceSansProBoldWoff = getCdnPath(folder, 'IBMPlexSans-Bold.woff');
  const sourceSansProBoldWoff2 = getCdnPath(folder, 'IBMPlexSans-Bold.woff2');
  const sourceSansProBoldItalicWoff = getCdnPath(
    folder,
    'IBMPlexSans-BoldItalic.woff'
  );
  const sourceSansProBoldItalicWoff2 = getCdnPath(
    folder,
    'IBMPlexSans-BoldItalic.woff2'
  );

  const preloadLinks = fontWeights.reduce<React.ReactNode[]>(
    (result, fontWeight) => {
      switch (fontWeight) {
        case 'ExtraLight': {
          return result.concat([
            buildPreloadLink(sourceSansProExtraLightWoff2),
            buildPreloadLink(sourceSansProExtraLightItalicWoff2)
          ]);
        }
        case 'Light': {
          return result.concat([
            buildPreloadLink(sourceSansProLightWoff2),
            buildPreloadLink(sourceSansProLightItalicWoff2)
          ]);
        }
        case 'Regular': {
          return result.concat([
            buildPreloadLink(sourceSansProRegularWoff2),
            buildPreloadLink(sourceSansProRegularItalicWoff2)
          ]);
        }
        case 'Medium': {
          return result.concat([
            buildPreloadLink(sourceSansProMediumWoff2),
            buildPreloadLink(sourceSansProMediumItalicWoff2)
          ]);
        }
        case 'SemiBold': {
          return result.concat([
            buildPreloadLink(sourceSansProSemiBoldWoff2),
            buildPreloadLink(sourceSansProSemiBoldItalicWoff2)
          ]);
        }
        case 'Bold': {
          return result.concat([
            buildPreloadLink(sourceSansProBoldWoff2),
            buildPreloadLink(sourceSansProBoldItalicWoff2)
          ]);
        }
      }
      return result;
    },
    []
  );

  return [
    preloadLinks,
    css`
      ${buildFontFace({
        name,
        weight: 'ExtraLight',
        woff: sourceSansProExtraLightWoff,
        woff2: sourceSansProExtraLightWoff2
      })}

      ${buildFontFace({
        name,
        weight: 'ExtraLight',
        woff: sourceSansProExtraLightItalicWoff,
        woff2: sourceSansProExtraLightItalicWoff2,
        isItalic: true
      })}
    
    ${buildFontFace({
        name,
        weight: 'Light',
        woff: sourceSansProLightWoff,
        woff2: sourceSansProLightWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: 'Light',
        woff: sourceSansProLightItalicWoff,
        woff2: sourceSansProLightItalicWoff2,
        isItalic: true
      })}
    
    ${buildFontFace({
        name,
        weight: 'Regular',
        woff: sourceSansProRegularWoff,
        woff2: sourceSansProRegularWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: 'Regular',
        woff: sourceSansProRegularItalicWoff,
        woff2: sourceSansProRegularItalicWoff2,
        isItalic: true
      })}
    
    ${buildFontFace({
        name,
        weight: 'Medium',
        woff: sourceSansProMediumWoff,
        woff2: sourceSansProMediumWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: 'Medium',
        woff: sourceSansProMediumItalicWoff,
        woff2: sourceSansProMediumItalicWoff2,
        isItalic: true
      })}
    
    ${buildFontFace({
        name,
        weight: 'SemiBold',
        woff: sourceSansProSemiBoldWoff,
        woff2: sourceSansProSemiBoldWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: 'SemiBold',
        woff: sourceSansProSemiBoldItalicWoff,
        woff2: sourceSansProSemiBoldItalicWoff2,
        isItalic: true
      })}
    
    ${buildFontFace({
        name,
        weight: 'Bold',
        woff: sourceSansProBoldWoff,
        woff2: sourceSansProBoldWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: 'Bold',
        woff: sourceSansProBoldItalicWoff,
        woff2: sourceSansProBoldItalicWoff2,
        isItalic: true
      })}
    `
  ];
}