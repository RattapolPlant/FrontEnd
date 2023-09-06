import HomeSlider from "../components/HomeSlider"

const HomePage = () => {

    return(
        <>
        <div className="p-4">
          <HomeSlider />

          <div className="blog max-w-4xl mx-auto my-4">
            <h2 className="text-4xl font-bold underline">บทความ</h2>
          </div>
        </div>
        </>
    )
}

export default HomePage