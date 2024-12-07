import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';

imagemin(['data/*.png'], {
  destination: 'output/images',
  plugins: [
    imageminPngquant()
  ]
}).

    then((): void => { console.log('Images optimized'); }).

    catch((error): void => { console.error(error); });
