import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../CSS/style.scss'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
function MemberCard(props) {
  const name=props.name
  const mobileNo = props.mobileNo
  const email = props.email
  const location = props.location
  const photo = props.photo
    return (
    // <Card className='my-4' style={{ width: '80%' }}>
    //   <Card.Img variant="top" src="https://picsum.photos/200/300" />
    //   <Card.Body>
    //     <Card.Title style={{textAlign : 'center'}}>{name}</Card.Title>
    //     <Card.Text>
    //       ok
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
    
    
      <div className="col-sm-8 offset-sm-2 col-md-10">
        {/* Profile Card */}
        <div className="profile-card card rounded-1g shadow p-4 p-x1-5 mb-4 text-center">
          <div className="banner" />
          <img src= {photo} alt="" className="img-circle mx-auto mb-3" />
          <h3 className="mb-4">{name}</h3>
          <div className="text-left mb-4">
            <h6 className="mb-2"><i className="fa fa-envelope mr-2" /><MailOutlineIcon/>{email}</h6>
            <h6 className="mb-2"><i className="fa fa-phone mr-2"><CallOutlinedIcon/> {mobileNo}</i></h6>
            <h6 className="mb-2"><i className="fa fa-map-marker-alt mr-2" /><LocationOnOutlinedIcon/> {location}</h6>
          </div>
          <div className="social-links d-flex justify-content-center">
            {/* <a href="#" className="mx-2">
              <img src="img/social/dribbble.svg" alt="Dribbble" />
            </a> */}
            <a href="#" className="mx-2">
              <FacebookIcon/>
            </a>
            <a href="#" className="mx-2">
              <LinkedInIcon/>
            </a>
            <a href="#" className="mx-2">
            <EmailIcon/>
            </a>
          </div>
        </div>
      </div>

     
  
  );
}

export default MemberCard;