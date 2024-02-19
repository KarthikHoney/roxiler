import {Component} from "react";
import TransactionItems from "../TransactionItems";
import "./index.css";
 const selectedMonth = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
class Transaction extends Component{
    state={searchInput:"", month:selectedMonth[2],listOfItems:[]}

    componentDidMount(){
        this.getTransactionDetails()
    }

    getTransactionDetails= async()=>{
        const Url ="https://s3.amazonaws.com/roxiler.com/product_transaction.json"
        const response = await fetch(Url);
        if(response.ok){
            const data = await response.json()
            console.log(data)
            const updatedData = data.product_transaction.map(eachItems=>({
                id:eachItems.id,
                title:eachItems.title,
                price:eachItems.price,
                description:eachItems.description,
                category:eachItems.category,
                image:eachItems.image,
                sold:eachItems.sold,
                dateOfSale:eachItems.dateOfSale
            }))
            this.setState({listOfItems:updatedData})
        }
    }

    render(){
       const {listOfItems}=this.state
           return(
            <div>
            <h1>karthik</h1>
          
           <ul>
           {listOfItems.map((each)=><TransactionItems key={each.id} ItemsDetails={each} />)}
           </ul>
            </div>
        )
    }
}
export default Transaction;