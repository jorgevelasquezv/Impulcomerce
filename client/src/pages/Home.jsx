
import Card from '../components/Card/Card';
import Carousel from '../components/Carousel/Carousel';
import SearchBar from '../components/SearchBar/SearchBar';
import Spinner from '../components/Spinner/Spinner';
import { useHome } from '../hooks/useHome';

const Home = () => {
    const [emprendedores, loadProveedores] = useHome()

    return (
        <>
            <Carousel />
            <SearchBar loadProveedores={loadProveedores} />
            <div className="container">
                <div className="row">
                    {emprendedores ?
                        emprendedores.map((emprendedor) => (
                            <Card key={emprendedor._id} data={emprendedor} />
                        )) : <Spinner />}
                </div>
            </div>
        </>
    );
};

export default Home;
