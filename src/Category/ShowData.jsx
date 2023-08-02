

const ShowData = ({ Doll }) => {
    const { picture, name, price, rating } = Doll;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><img className="h-[400px]" src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name:{name}</h2>
                    <h2>Price:${price}</h2>
                    <h2>Rating:{rating}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowData;