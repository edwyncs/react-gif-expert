import { GifCard, Iconos } from './';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);
    // Otra manera
    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect(() => {
    //     getImages();
    // }, [ ])
    
  return (
    <>
        { images.length > 1 && (<h3>{category}</h3>)}
        {/* No existira el elemento hasta que lo quiera mostrar  */}
        {
            isLoading && ( <Iconos type = 'loading'/> ) //if corto
        }
        <div className='card-grid'>
            {/* <div className='notFound'>
            {
                images.length <= 1 && (<Iconos type = 'notFound'/>)
            }
            </div> */}
            {images.map((gif) => (
                <GifCard 
                    key={gif.id}
                    {...gif}
                />
            ))}
        </div>
    </>
  )
};