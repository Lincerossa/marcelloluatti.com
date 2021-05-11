import React from 'react'
import { LazyImageFull, ImageState   } from "react-lazy-images";
import PropTypes from "prop-types"
import * as S from './styles'


const MyImage = ({ image, hasShadow, type }) => (
  <>
    <LazyImageFull src={image.src} debounceDurationMs={500}>
      {({ imageProps, imageState, ref }) => (
        <>
        {ImageState.LoadSuccess && hasShadow && <S.Shadow />}
        <S.Image
          {...imageProps}
          loadEagerly
          type={type}
          ref={ref}
          src={
            imageState === ImageState.LoadSuccess
              ? imageProps.src
              : imageProps.src // this will be the low resolution image
          }
          loading={imageState === ImageState.NotAsked || imageState === ImageState.Loading ? "true" : null}
          success={imageState === ImageState.LoadSuccess}
          error={imageState === ImageState.LoadError}
          imageState={imageState}
        />
        
        </>
        
      )}
    </LazyImageFull>
    
    {image.description && <S.Description>{image.description}</S.Description>}
  </>

)
 
MyImage.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
  hasShadow: PropTypes.bool,
  type: PropTypes.string
}
export default MyImage

