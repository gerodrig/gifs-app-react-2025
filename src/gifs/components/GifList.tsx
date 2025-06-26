import type { Gif } from "../interfaces/gif.interface"

interface Props {
    gifs: Gif[]
}

export const GifList = ({ gifs }: Props) => {
    return (
        <div className="grid grid-cols-2 gap-2 w-full max-w-[1200px] mx-auto
            md:grid-cols-3 md:gap-5
            lg:grid-cols-4 lg:gap-7.5
            xl:grid-cols-5 xl:gap-10">
            {gifs.map((gif) => (
                <div key={gif.id} className="flex flex-col items-center justify-center mb-12">
                    <img
                        src={gif.url}
                        alt={gif.title}
                        className="w-full h-full object-cover rounded-[10px]"
                    />
                    <h3>{gif.title}</h3>
                    <p>{gif.width}x{gif.height} (1.5mb)</p>
                </div>
            ))}
        </div>
    )
}

/* Gifs */
// .gifs-container {
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 10px;
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
// }

// .gif-card {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 50px;
// }

// .gifs-container img {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   border-radius: 10px;
// }

// @media (min-width: 768px) {
//   .gifs-container {
//     grid-template-columns: repeat(3, 1fr);
//     gap: 20px;
//   }
// }

// @media (min-width: 1024px) {
//   .gifs-container {
//     grid-template-columns: repeat(4, 1fr);
//     gap: 30px;
//   }
// }

// @media (min-width: 1280px) {
//   .gifs-container {
//     grid-template-columns: repeat(5, 1fr);
//     gap: 40px;
//   }
// }