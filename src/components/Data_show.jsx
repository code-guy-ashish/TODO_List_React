import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../comp_css/Data_show.css'

const Data_show = ({index,name,email}) => {
  return (
    <div className='show_data_outer'>
      <div className="show_data_inner">
        <div className="name">{name}</div>
        <div className="Email">{email}</div>
        <Button variant="contained" color="error">
          <DeleteForeverIcon />
        </Button>
      </div>
    </div>
  )
}

export default Data_show
