import { useParams } from 'react-router';
// import useAuth from '../../../Hooks/useAuth';
import './Details.css';

const Details = () => {
    const { details_id } = useParams();
    // const { services } = useAuth();
    // const getDetails = services.filter(service => service._id === details_id);
    // const detail = getDetails[0];
    // console.log(detail);
    // const { _id, name } = detail;
    return (
        <div>
            <div className="container text-center mt-5"><h2>details of -id: {details_id}</h2></div>
        </div>
    );
};

export default Details;