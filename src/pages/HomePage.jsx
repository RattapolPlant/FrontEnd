import HomeSlider from "../components/HomeSlider"
import ListCard from "../components/ListCard"
import PostCard from "../components/PostCard"

const HomePage = () => {

    return(
        <>
        <div className="p-4">
          <HomeSlider />
          <div className="max-w-4xl mx-auto my-4">
            <div>
              <ListCard img={"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"} title={"New album is released!"} discreption={"Click the button to listen on Spotiwhy app."} />
            </div>
            <h2 className="text-4xl font-bold underline text-center my-7">บทความ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-4">
              <PostCard img={"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"} title={"New album is released!"} discreption={"Click the button to listen on Spotiwhy app."} />
              <PostCard img={"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"} title={"New album is released!"} discreption={"Click the button to listen on Spotiwhy app."} />
              <PostCard img={"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"} title={"New album is released!"} discreption={"Click the button to listen on Spotiwhy app."} />
            </div>
          </div>
        </div>
        </>
    )
}

export default HomePage