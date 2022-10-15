const describe_city = (city_name, country_name = "Pakistan") => {
    console.log(`"${city_name}, ${country_name}"`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Islamabad");
describe_city("New York", "USA");