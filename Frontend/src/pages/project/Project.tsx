import Single from "../../components/single/Single"
import { singleProduct } from "../../data"
import "./project.scss"

const Product = () => {
  // const [open, setOpen] = useState(false);

  //Fetch data and send to Single Component
  return (
    <div className="product">
      <Single {...singleProduct}/>
    </div>
  )
}

export default Product