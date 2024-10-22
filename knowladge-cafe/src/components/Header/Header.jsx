import profile from '../../assets/images/profile.png'
import PropTypes from 'prop-types';

const Header = () => {
    return (
        <div className='md:max-w-6xl mx-auto py-4 flex justify-between items-center'>
            <h1 className='text-4xl'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

Header.propTypes = {
    Header: PropTypes.object.isRequired
};

export default Header;