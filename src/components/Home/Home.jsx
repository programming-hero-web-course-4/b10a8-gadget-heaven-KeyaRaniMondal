import Banner from "../Banner/Banner"
import Categories from "../categories/Categories";


const Home = () => {
    document.title='Gadget Heaven-Home';
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    )
}
export default Home;