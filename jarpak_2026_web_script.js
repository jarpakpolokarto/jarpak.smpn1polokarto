document.addEventListener("DOMContentLoaded", function() {
	const baseUrl = "/jarpak.smpn1polokarto";
	// Global: Header
	const globalHeader = `
		<div class="header-container">	
			<a href="${baseUrl}/index.html" class="logo-link">
                <img src="${baseUrl}/images/logo.jpeg" alt="Logo Website">
            </a>
			<nav>
				<ul>
					<li><a href="${baseUrl}/index.html">Home</a></li>
					<li><a href="${baseUrl}/about.html">About</a></li>
					<li><a href="${baseUrl}/project.html">Project</a></li>
					<li><a href="${baseUrl}/gallery.html">Gallery</a></li>
					<li><a href="${baseUrl}/contact.html">Contact</a></li>
				</ul>
			</nav>
		</div>
    `;
	
	const elemenHeader = document.getElementById("global_header");
	if (elemenHeader) {
		elemenHeader.innerHTML = globalHeader;
		
		const currentPath = window.location.pathname.split("/").pop();
		const navLinks = elemenHeader.querySelectorAll("nav ul li a");
		navLinks.forEach(link => {
			const linkAttribute = link.getAttribute("href");
			
			if (linkAttribute.endsWith(currentPath)) {
				link.classList.add("active");
			} else {
				link.classList.remove("active");
			}
		})
	};
	
	// Global: Footer
	const footerElement = document.getElementById('main-footer');

	footerElement.innerHTML = `
	  <div class="footer-container">
		<div class="social-section">
		  <h3>Follow Us</h3>
		  <div class="social-icons">
			<a href="https://www.instagram.com/hibahjarpak_smpn1polokarto" target="_blank" rel="noopener noreferrer" class="social-circle" aria-label="Instagram">
				<i class="fa-brands fa-instagram"></i>
			</a>
			<a href="https://www.tiktok.com/@hibah_smpn1polokarto" target="_blank" rel="noopener noreferrer" class="social-circle" aria-label="TikTok">
				<i class="fa-brands fa-tiktok"></i></a>
		  </div>
		</div>
		<p class="copyright">Copyright © 2026 Universitas Sebelas Maret</p>
	  </div>
	`;

	footerElement.className = 'custom-footer';
		
	// Project Page - baca selengkapnya
	const paragraphs = document.querySelectorAll('.card-content p');
	const batasKarakter = 120; 
	
	paragraphs.forEach(function(p) {
		const teksAsli = p.textContent.trim();
		const tautanTujuan = p.getAttribute('data-link') || '#';
		if (teksAsli.length > batasKarakter) {
			let teksDipotong = teksAsli.slice(0, batasKarakter).trim();
			p.innerHTML = `${teksDipotong}... <a href="${tautanTujuan}" class="read-more-link">baca selengkapnya</a>`;
        }
    });
});
