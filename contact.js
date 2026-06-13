alert("contact.js loaded");

const supabaseUrl = "https://usygsrabxcjuebpmysut.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzeWdzcmFieGNqdWVicG15c3V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExODUwNzcsImV4cCI6MjA5Njc2MTA3N30.dBJd8IsUsYMtyJJ6XHsnKaj8IPMVuhodcNnFDO0CKxU";

const supabaseClient = supabase.createClient(
    supabaseUrl,
    supabaseKey
);

const form = document.getElementById("contactForm");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    alert("Form submitted");

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const business = document.getElementById("business").value;
    const message = document.getElementById("message").value;

    const { data, error } = await supabaseClient
        .from("leads")
        .insert([
{
    name: name,
    email: email,
    phone: phone,
    business: business,
    message: message
}
]);

    console.log("Data:", data);
    console.log("Error:", error);

    if(error){

        alert("ERROR: " + error.message);

    }else{

        alert("SUCCESS! Lead saved.");

        form.reset();

    }

});