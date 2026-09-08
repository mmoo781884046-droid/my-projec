/* =====================================================
   بصمتك | منصة اكتشاف المواهب الجامعية
   JavaScript
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       تشغيل السنة تلقائياً

       ========================= */

    const year = document.getElementById("currentYear");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =========================
       ظهور العناصر أثناء النزول
       ========================= */

    const animatedElements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    animatedElements.forEach(function (element) {
        observer.observe(element);
    });


    /* =========================
       التحقق من نموذج التسجيل
       ========================= */

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {

        registerForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const password = document.getElementById("password");
            const confirmPassword =
                document.getElementById("confirmPassword");

            let valid = true;


            /* الاسم */

            if (name && name.value.trim().length < 3) {

                showError(
                    name,
                    "يرجى إدخال الاسم بشكل صحيح."
                );

                valid = false;

            } else if (name) {

                clearError(name);

            }


            /* البريد */

            if (
                email &&
                !validateEmail(email.value.trim())
            ) {

                showError(
                    email,
                    "يرجى إدخال بريد إلكتروني صحيح."
                );

                valid = false;

            } else if (email) {

                clearError(email);

            }


            /* كلمة المرور */

            if (
                password &&
                password.value.length < 6
            ) {

                showError(
                    password,
                    "كلمة المرور يجب أن تكون 6 أحرف على الأقل."
                );

                valid = false;

            } else if (password) {

                clearError(password);

            }


            /* تأكيد كلمة المرور */

            if (
                confirmPassword &&
                password &&
                confirmPassword.value !== password.value
            ) {

                showError(
                    confirmPassword,
                    "كلمتا المرور غير متطابقتين."
                );

                valid = false;

            } else if (confirmPassword) {

                clearError(confirmPassword);

            }


            /* نجاح التسجيل */

            if (valid) {

                showSuccess(
                    "تم إنشاء حسابك بنجاح 🎉"
                );

                registerForm.reset();

            }

        });

    }


    /* =========================
       التحقق من تسجيل الدخول
       ========================= */

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const email = document.getElementById("loginEmail");
            const password =
                document.getElementById("loginPassword");

            let valid = true;


            if (
                email &&
                !validateEmail(email.value.trim())
            ) {

                showError(
                    email,
                    "يرجى إدخال بريد إلكتروني صحيح."
                );

                valid = false;

            } else if (email) {

                clearError(email);

            }


            if (
                password &&
                password.value.length < 6
            ) {

                showError(
                    password,
                    "كلمة المرور يجب أن تكون 6 أحرف على الأقل."
                );

                valid = false;

            } else if (password) {

                clearError(password);

            }


            if (valid) {

                showSuccess(
                    "تم تسجيل الدخول بنجاح ✓"
                );

                setTimeout(function () {

                    window.location.href = "index.html";

                }, 1200);

            }

        });

    }


    /* =========================
       البحث عن المواهب
       ========================= */

    const searchInput =
        document.getElementById("talentSearch");

    const talentCards =
        document.querySelectorAll(".talent-card");

    if (searchInput && talentCards.length > 0) {

        searchInput.addEventListener("input", function () {

            const searchValue =
                searchInput.value.toLowerCase().trim();

            talentCards.forEach(function (card) {

                const cardText =
                    card.textContent.toLowerCase();

                if (cardText.includes(searchValue)) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }


    /* =========================
       فلترة المواهب حسب المهارة
       ========================= */

    const skillFilter =
        document.getElementById("skillFilter");

    if (skillFilter && talentCards.length > 0) {

        skillFilter.addEventListener("change", function () {

            const selectedSkill =
                skillFilter.value.toLowerCase();

            talentCards.forEach(function (card) {

                const cardText =
                    card.textContent.toLowerCase();

                if (
                    selectedSkill === "" ||
                    cardText.includes(selectedSkill)
                ) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }


    /* =========================
       نموذج تواصل معنا
       ========================= */

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const contactName =
                document.getElementById("contactName");

            const contactEmail =
                document.getElementById("contactEmail");

            const message =
                document.getElementById("message");

            let valid = true;


            if (
                contactName &&
                contactName.value.trim().length < 3
            ) {

                showError(
                    contactName,
                    "يرجى إدخال الاسم."
                );

                valid = false;

            } else if (contactName) {

                clearError(contactName);

            }


            if (
                contactEmail &&
                !validateEmail(contactEmail.value.trim())
            ) {

                showError(
                    contactEmail,
                    "يرجى إدخال بريد إلكتروني صحيح."
                );

                valid = false;

            } else if (contactEmail) {

                clearError(contactEmail);

            }


            if (
                message &&
                message.value.trim().length < 10
            ) {

                showError(
                    message,
                    "يرجى كتابة رسالة لا تقل عن 10 أحرف."
                );

                valid = false;

            } else if (message) {

                clearError(message);

            }


            if (valid) {

                showSuccess(
                    "تم إرسال رسالتك بنجاح ✓"
                );

                contactForm.reset();

            }

        });

    }

});


/* =====================================================
   وظائف مساعدة
   ===================================================== */


/* التحقق من البريد الإلكتروني */

function validateEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}


/* عرض الخطأ */

function showError(input, message) {

    input.classList.add("is-invalid");

    let error =
        input.parentElement.querySelector(".error-message");

    if (!error) {

        error = document.createElement("div");

        error.className = "error-message text-danger mt-2";

        input.parentElement.appendChild(error);

    }

    error.textContent = message;

}


/* إزالة الخطأ */

function clearError(input) {

    input.classList.remove("is-invalid");

    const error =
        input.parentElement.querySelector(".error-message");

    if (error) {

        error.remove();

    }

}


/* رسالة النجاح */

function showSuccess(message) {

    const alertBox =
        document.createElement("div");

    alertBox.className =
        "alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3 shadow";

    alertBox.style.zIndex = "9999";

    alertBox.innerHTML =
        `<i class="fa-solid fa-circle-check me-2"></i>${message}`;

    document.body.appendChild(alertBox);

    setTimeout(function () {

        alertBox.remove();

    }, 3000);

}
// =========================
// تحديات منصة بصمتك
// =========================

function joinChallenge(challengeName) {
    const userConfirmed = confirm(
        "هل تريد الانضمام إلى: " + challengeName + " ؟"
    );

    if (userConfirmed) {
        alert(
            "تم تسجيل اهتمامك بنجاح في " +
            challengeName +
            " 🎉"
        );
    }
}