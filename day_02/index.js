const getData = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const res = await response.json();
  console.log(res);

  try{
    const response = await fetch('https://fakestoreapi.com/products');
    const res = await response.json();
    console.log(res);
  }catch(error){
    console.log("unable to fetch data");
  }
}