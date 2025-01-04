import icon from '../assets/icon.png';

const Footer = () => {
  return (
    <div className="footer">
        <h5><img src={icon} alt="icon" style={{ height: '15px', width: '15px' ,marginRight:'5px'}} />m<i>ews</i></h5>
        <p>&copy; 2024 : Developed by <b>Mohanapriyan.M</b>
        </p>
    </div>
  )
}

export default Footer