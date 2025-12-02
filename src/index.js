    document.getElementById("current-year").textContent = new Date().getFullYear();

    function handleFormSubmit(event) {
      event.preventDefault();
      const name = (document.getElementById("name").value || "").trim();
      const phone = (document.getElementById("phone").value || "").trim();
      const studentName = (document.getElementById("student-name").value || "").trim();
      const standard = (document.getElementById("standard").value || "").trim();
      const subject = (document.getElementById("subject").value || "").trim();
      const messageElement = document.getElementById("form-message");

      if (!name || !phone || !studentName || !standard) {
        messageElement.textContent = "Please fill in all required fields";
        messageElement.style.display = "block";
        messageElement.style.color = "#FCD34D";
        setTimeout(() => { messageElement.style.display = "none"; }, 3000);
        return;
      }

      const prefilledMessage = encodeURIComponent(
        `Hello Gurukul Tuition Classes! 👋\n\nI am inquiring about enrollment.\n\n📝 Details:\nParent Name: ${name}\nStudent Name: ${studentName}\nPhone: ${phone}\nInterested Standard: ${standard}\n${subject ? `Subject Interest: ${subject}` : ""}\n\nPlease share batch details, fee structure, and availability. Thank you!`
      );

      const whatsappUrl = `https://wa.me/918200514629?text=${prefilledMessage}`;

      messageElement.textContent = "Redirecting to WhatsApp...";
      messageElement.style.display = "block";
      messageElement.style.color = "white";

      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
        document.getElementById("enrollment-form").reset();
        messageElement.style.display = "none";
      }, 600);
    }