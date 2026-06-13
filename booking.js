const supabaseUrl = "https://usygsrabxcjuebpmysut.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzeWdzcmFieGNqdWVicG15c3V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExODUwNzcsImV4cCI6MjA5Njc2MTA3N30.dBJd8IsUsYMtyJJ6XHsnKaj8IPMVuhodcNnFDO0CKxU";

const supabaseClient = supabase.createClient(
supabaseUrl,
supabaseKey
);

document
.getElementById("bookingForm")
.addEventListener("submit", async function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const date = document.getElementById("date").value;
const time = document.getElementById("time").value;

const { error } = await supabaseClient
.from("appointments")
.insert([
{
name,
email,
phone,
date,
time
}
]);

if(error){

alert("Error saving appointment");
console.error(error);

}else{

alert("Appointment booked successfully!");

document
.getElementById("bookingForm")
.reset();

}

});