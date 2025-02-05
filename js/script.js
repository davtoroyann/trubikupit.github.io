// =========================================================================================================
// To determine whether the user has logged in via phone or PC, and what operating system the user is using
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};
// =========================================================================================================
// Preheader links moving to header burger menu
document.addEventListener('DOMContentLoaded', function() {
    const navList = document.querySelector('.header__list');
    const preheaderList = document.querySelector('.preheader__nav ul');
    const preheaderLinks = document.querySelectorAll('.preheader__item');

    function moveLinks() {
        if(window.innerWidth < 766.98) {
            preheaderLinks.forEach((link) => {
                navList.append(link);
                link.classList.add('header__item')
            })
        } else if (!window.innerWidth < 766.98) {
            preheaderLinks.forEach((link) => {
                preheaderList.append(link);
                link.classList.remove('header__item')
            })
        }
    }
    moveLinks();
    window.addEventListener('resize', moveLinks);
    window.addEventListener('load', moveLinks);
})
// =========================================================================================================
// Header Logo Changing
document.addEventListener('DOMContentLoaded', function() {
    const logoFirst = document.getElementById('pageLogo');

    function LogoChanging() {
        if(window.innerWidth > 479.98) {
            logoFirst.src = "img/header/logo.svg";
        } else if(window.innerWidth < 479.98) {
            logoFirst.src = "img/header/logo1.svg";
        }
    }
    
    LogoChanging();
    window.addEventListener('resize', LogoChanging);
})
// =========================================================================================================
// Modal Menus
document.addEventListener('DOMContentLoaded', function() {
    // Calc Modal Menu
    const calc = document.querySelector('.calc');
    const calcMenu = document.querySelector('.calc-modal');
    const calcClose = document.querySelector('.calc-modal__close');
    // CallBack Modal Menu
    const callBack = document.querySelectorAll('.callback__btn');
    const callBackMenu = document.querySelector('.callback-modal');
    const callBackClose = document.querySelector('.callback__close');
    // Item Modal Menu
    const product = document.querySelectorAll('.product');
    const itemModal = document.getElementById('modalItem');
    const itemModalClose = document.querySelector('.item-modal__close');
    // Image Modal Menu
    const openImg = document.querySelectorAll('.open-image');
    const imageModal = document.getElementById('modalImg');
    const imageItem = document.getElementById('modalImage');
    const imageModalClose = document.querySelector('.image-modal__close');
    // Cart Add Modal Menu
    const cartAdd = document.querySelectorAll('.cart-add');
    const cartModal = document.getElementById('modalCart');
    const cartModalClose = document.querySelector('.cart-modal__close');
    const cartModalCloseBtn = document.querySelector('.cart-modal__button-close');

    // Calc Modal Menu
    calc.addEventListener('click', function() {
        calcMenu.style.display = 'block';
        setTimeout(() => {
            calcMenu.classList.add('_active');
            calc.classList.add('_active');
            document.body.classList.add('_dark');
            document.body.classList.add('_lock');
        }, 100);
    });
    calcClose.addEventListener('click', function() {
        if (calcMenu.classList.contains('_active')) {
            calcMenu.classList.remove('_active');
            calc.classList.remove('_active');
        }

        document.body.classList.remove('_dark');
        document.body.classList.remove('_lock');

        setTimeout(() => {
            if (!calcMenu.classList.contains('_active')) {
                calcMenu.style.display = 'none';
            }
        }, 500);
    });

    // CallBack Modal Menu
    callBack.forEach((call) => {
        call.addEventListener('click', function() {
            callBackMenu.style.display = 'block';
            setTimeout(() => {
                callBackMenu.classList.add('_active');
                document.body.classList.add('_dark');
                document.body.classList.add('_lock');
            }, 100);
        });
    })
    callBackClose.addEventListener('click', function() {

        if (callBackMenu.classList.contains('_active')) {
            callBackMenu.classList.remove('_active');
        }

        document.body.classList.remove('_dark');
        document.body.classList.remove('_lock');

        setTimeout(() => {
            if (!callBackMenu.classList.contains('_active')) {
                callBackMenu.style.display = 'none';
            }
        }, 500);
    });

    // Item Modal Menu
    product.forEach((item) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            itemModal.style.display = `block`;
            setTimeout(() => {
                itemModal.classList.add('_active');
                document.body.classList.add('_dark');
                document.body.classList.add('_lock');
            }, 100);
        })
    })
    itemModalClose.addEventListener('click', function() {
        itemModal.classList.remove('_active');
        document.body.classList.remove('_dark');
        document.body.classList.remove('_lock');
        setTimeout(() => {
            itemModal.style.display = `none`;
        }, 500);
    })

    // Image Modal Menu
    openImg.forEach((img) => {
        img.addEventListener('click', function(e) {
            e.preventDefault();
            imageModal.style.display = "block";
            setTimeout(() => {
                imageModal.classList.add('_active');
                document.body.classList.add('_dark');
                document.body.classList.add('_lock');
            }, 100);
            imageItem.src = this.src;

        })
    })
    imageModalClose.addEventListener('click', function() {
        imageModal.classList.remove('_active');
        document.body.classList.remove('_dark');
        document.body.classList.remove('_lock');
        setTimeout(() => {
            imageModal.style.display = `none`;
        }, 500);
    })

    // Cart Add Modal Menu
    cartAdd.forEach((cart) => {
        cart.addEventListener('click', function(e) {
            e.preventDefault();
            cartModal.style.display = "block";
            setTimeout(() => {
                cartModal.classList.add('_active');
                document.body.classList.add('_dark');
                document.body.classList.add('_lock');
            }, 100);
        })
    })
    cartModalCloseBtn.addEventListener('click', function() {
        cartModal.classList.remove('_active');
        document.body.classList.remove('_dark');
        document.body.classList.remove('_lock');
        setTimeout(() => {
            cartModal.style.display = `none`;
        }, 500);
    })
});
// =========================================================================================================
// Modal Menu Phone Input Mask
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.modal__phone-number').forEach((phone) => {
        phone.addEventListener('input', function (e) {
            let x = e.target.value.replace(/\D/g, '').slice(0, 11); // remove all non-digits and limit to 11 digits
            let formatted = '+7 (';
    
            if (x.length > 1) formatted += x.substring(1, 4); // Area code
            if (x.length >= 5) formatted += ') ' + x.substring(4, 7); // Number first part
            if (x.length >= 8) formatted += '-' + x.substring(7, 9); // Number second part
            if (x.length >= 10) formatted += '-' + x.substring(9, 11); // Number third part
    
            e.target.value = formatted;
        });
    })
})
// =========================================================================================================
// Header Calc Modal Menu Select
document.addEventListener('DOMContentLoaded', function() {
    // Selected filter options - at first they are null: do not chosen
    const selectedFilters = {
        diameter: null,
        thickness: null,
        usage: null
    };

    function setupCustomSelect(selectId, hiddenInputId, filterKey = null) {
        const select = document.getElementById(selectId);
        
        if (!select) {
            return;
        }

        const trigger = select.querySelector('.select__trigger');
        const triggerSpan = select.querySelector('.select__trigger span');
        const options = select.querySelectorAll('.select__option');
        const hiddenInput = hiddenInputId ? document.getElementById(hiddenInputId) : null;
        
        trigger.addEventListener('click', function(e) {
            e.stopPropagation();
            if (select.classList.contains('_active')) {
                select.classList.remove('_active');
            } else {
                closeAllSelects();
                select.classList.add('_active');
            }
        });

        options.forEach(function(option) {
            option.addEventListener('click', function() {
                triggerSpan.textContent = this.textContent;

                if (hiddenInput) {
                    hiddenInput.value = this.getAttribute('data-value');
                }

                if (filterKey) {
                    selectedFilters[filterKey] = this.getAttribute('data-value');
                    filterItems();
                }

                select.classList.remove('_active');
            });
        });
    }

    function closeAllSelects() {
        document.querySelectorAll('.select__wrapper').forEach(function(select) {
            select.classList.remove('_active');
        });
    }

    function filterItems() {
        const items = document.querySelectorAll('.body-selection__item');

        items.forEach(function(item) {
            const diameter = item.getAttribute('data-diameter');
            const thickness = item.getAttribute('data-thickness');
            const usage = item.getAttribute('data-usage');

            const matchesDiameter = !selectedFilters.diameter || selectedFilters.diameter === diameter;
            const matchesThickness = !selectedFilters.thickness || selectedFilters.thickness === thickness;
            const matchesUsage = !selectedFilters.usage || selectedFilters.usage === usage;

            if (matchesDiameter && matchesThickness && matchesUsage) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    setupCustomSelect('select1', 'pipeDiameter');
    setupCustomSelect('select2', 'wallThickness');

    setupCustomSelect('select3', null, 'diameter'); 
    setupCustomSelect('select4', null, 'thickness');
    setupCustomSelect('select5', null, 'usage');     

    document.addEventListener('click', function(e) {
        const isClickInside = e.target.closest('.select__wrapper');
        if (!isClickInside) {
            closeAllSelects();
        }
    });
});
// =========================================================================================================
// Header Calc Modal Menu File
document.addEventListener('DOMContentLoaded', function() {
    const fileUpload = document.getElementById('fileUpload');
    const fileDelete = document.querySelector('.file__delete');
    
    if (fileUpload) {
        fileUpload.addEventListener('change', function() {
            const file = this.files[0];
            
            if (file) {
                const fileName = file.name;
                document.querySelector('.file__text').textContent = fileName;
                
                fileDelete.classList.add('_active');
                document.querySelector('.file__icon').classList.add('_pin');
                document.querySelector('.file-main__text').classList.add('_active');
                
                // Check Files
                const maxSize = 16 * 1024 * 1024;
                if (file.size > maxSize) {
                    alert('Файл превышает максимальный размер 16MB.');
                    this.value = '';
                    document.querySelector('.file__text').textContent = 'Прикрепите свое резюме (PDF, JPEG, PNG)';
                    fileDelete.classList.remove('_active');
                    document.querySelector('.file__icon').classList.remove('_pin');
                    document.querySelector('.file__main__text').classList.remove('_active');
                }
            }
        });

        fileDelete.addEventListener('click', function() {
            fileUpload.value = '';
            document.querySelector('.file__text').textContent = 'Прикрепите свое резюме (PDF, JPEG, PNG)';
            fileDelete.classList.remove('_active');
            document.querySelector('.file__icon').classList.remove('_pin');
            document.querySelector('.file-main__text').classList.remove('_active');
        });
    }
});
// =========================================================================================================
// Header Menu Submenu Show
document.addEventListener('DOMContentLoaded', function () {
    let headerItems = document.querySelectorAll('.header__item');

    headerItems.forEach((item) => {
        let headerSubMenu = item.querySelector('.submenu');

        if (headerSubMenu) {
            let arrow = document.createElement('span');
            arrow.className = 'header__arrow';
            item.insertBefore(arrow, headerSubMenu);

            arrow.addEventListener('click', function (e) {
                e.stopPropagation();

                const isActive = headerSubMenu.classList.contains('_active');

                closeAllSubMenus();

                if (!isActive) {
                    openSubMenu(headerSubMenu);
                    item.classList.add('_active');
                }
            });
        }
    });

    function closeAllSubMenus() {
        headerItems.forEach((item) => {
            let subMenu = item.querySelector('.submenu');
            if (subMenu) {
                closeSubMenu(subMenu);
                item.classList.remove('_active');
            }
        });
    }

    function openSubMenu(subMenu) {
        subMenu.classList.add('_active');
        if (window.innerWidth <= 766.98) {
            subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
        }
    }

    function closeSubMenu(subMenu) {
        if (window.innerWidth <= 766.98) {
            subMenu.style.maxHeight = '0';
        }   
        subMenu.classList.remove('_active');
    }
});
// =========================================================================================================
// Header Choose Category
document.addEventListener('DOMContentLoaded', function() {
    // Get Elements
    const categoryButtons = document.querySelectorAll('.tabs-dex__tab');
    const widthOptionsContainer = document.getElementById('widthOptions');
    const productList = document.querySelector('.dex-products__list');
    const products = document.querySelectorAll('.item-dex');
    
    // Creating and customizing messages
    const noProductsMessage = document.createElement('div');
    noProductsMessage.className = `category-dex__message`;

    const selectWidthMessage = document.createElement('div');
    selectWidthMessage.className = `dex-products__message`;

    noProductsMessage.textContent = 'Товары по указанной ширине отсутствуют';

    if (widthOptionsContainer && widthOptionsContainer.parentNode) {
        widthOptionsContainer.parentNode.appendChild(noProductsMessage);
    }

    if (productList) {
        productList.appendChild(selectWidthMessage);
    }

    // Width options for categories
    const widthOptions = {
        pipe: ['159', '219', '245', '273', '325', '377', '426', '508', '530', '630', '720', '820', '920', '1020', '1220', '1420', '1620', '1820'],
        beam: ['159', '219', '245', '273', '325', '377', '426', '508', '530', '630', '720', '820', '920', '1020', '1220', '1420', '1620', '1820'],
        channel: ['159', '219', '245', '273', '325', '377', '426', '508', '530', '630', '720', '820', '920', '1020', '1220', '1420', '1620', '1820'],
        sheet: ['159', '219', '245', '273', '325', '377', '426', '508', '530', '630', '720', '820', '920', '1020', '1220', '1420', '1620', '1820']
    };

    // Because no category or width is selected
    let selectedCategory = null;
    let selectedWidth = null;

    // Width Options Update Function
    function updateWidthOptions(category, categoryName) {
        widthOptionsContainer.innerHTML = '';
        noProductsMessage.style.display = 'none';
        selectWidthMessage.textContent = `Выберите ширину для категории ${categoryName}`;
        selectWidthMessage.style.display = 'block';

        if (widthOptions[category]) {
            widthOptions[category].forEach(width => {
                const option = document.createElement('li');
                option.className = 'category-dex__body-item';
                option.textContent = `${width} мм`;
                option.dataset.width = width;
                option.dataset.category = category;
                widthOptionsContainer.appendChild(option);
            });
        }
    }

    // Click handlers for categories and widths
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            selectedCategory = this.dataset.category;
            const categoryName = this.textContent.trim();

            selectedWidth = null;
            categoryButtons.forEach(button => button.classList.remove('_tab-on'));
            this.classList.add('_tab-on');

            updateWidthOptions(selectedCategory, categoryName);

            document.querySelectorAll('.category-dex__body-item').forEach(option => {
                option.addEventListener('click', function() {
                    document.querySelector('.dex__bottom-products').style.display = 'block';
                    document.querySelector('.dex__bottom-line').style.display = 'block';
                    selectedWidth = this.dataset.width;
                    selectWidthMessage.style.display = 'none';

                    document.querySelectorAll('.category-dex__body-item').forEach(opt => opt.classList.remove('_active'));
                    this.classList.add('_active');
                    filterProducts();
                });
            });

            filterProducts();
        });
    });

    // Product filtering function
    function filterProducts() {
        if (!selectedCategory) {
            console.error('Категория не выбрана.');
            return;
        }

        let productsFound = false; // For checking the availability of goods

        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            const productWidth = product.getAttribute('data-width').trim();

            if (productCategory === selectedCategory && selectedWidth && productWidth === selectedWidth) {
                product.style.display = 'flex';
                product.classList.add('_show');
                productsFound = true;
            } else {
                product.classList.remove('_show');
                product.style.display = 'none';
            }
        });

        if (!productsFound && selectedWidth) {
            document.querySelector('.dex__bottom-products').style.display = 'none';
            document.querySelector('.dex__bottom-line').style.display = 'none';
            noProductsMessage.style.display = 'block';
        } else {
            noProductsMessage.style.display = 'none';
        }
    }

    if (categoryButtons.length > 0) {
        categoryButtons[0].click();
    }
});
// =========================================================================================================
// Floating Button
document.addEventListener('DOMContentLoaded', function() {
    const floatingBtn = document.querySelector('.floating');
    const floatingMenu = document.querySelector('.menu-floating');

    floatingBtn.addEventListener('click', function() {
        floatingBtn.classList.toggle('_active');
        floatingMenu.classList.toggle('_show');
    })
})
// =========================================================================================================
// Scroll to any part of the page
document.addEventListener('DOMContentLoaded', function() {
    const linkScroll = document.querySelectorAll('.link-scroll[data-scroll]')
    const burgerMenuIcon = document.querySelector('.burger-menu__icon');
    const menuBody = document.querySelector('.menu');
    if(linkScroll.length > 0) {
        linkScroll.forEach((link) => {
            link.addEventListener('click', function(e) {
                const link = e.target;
                if(link.dataset.scroll && document.querySelector(link.dataset.scroll)) {
                    if(burgerMenuIcon.classList.contains('_cross')) {
                        document.body.classList.remove('_lock');
                        burgerMenuIcon.classList.remove('_cross');
                        menuBody.classList.remove('_active');
                    }
                    const scrollBlock = document.querySelector(link.dataset.scroll);
                    const scrollBlockValue = scrollBlock.getBoundingClientRect().top + pageYOffset;
                    window.scrollTo({
                        top: scrollBlockValue,
                        behavior: "smooth"
                    })
                    e.preventDefault();
                }
            })
        })
    }

})
// =========================================================================================================
// Change callback button position
document.addEventListener('DOMContentLoaded', function() {
    const callback = document.querySelector('.callback__button');
    
    function changePosition() {
        if(window.innerWidth < 766.98) {
            document.querySelector('.header__bottom .header__con').insertBefore(callback, document.querySelector('.header__nav'));
        } else if(window.innerWidth > 766.98) {
            document.querySelector('.header__bottom .header__con').appendChild(callback);
        }
    }
    changePosition();
    window.addEventListener('resize', changePosition);
})
// =========================================================================================================
// Header Burger menu
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenuIcon = document.querySelector('.burger-menu__icon');
    const menuBody = document.querySelector('.menu');
    if(burgerMenuIcon) {
        burgerMenuIcon.addEventListener('click', (e)=> {
            document.body.classList.toggle('_lock');
            burgerMenuIcon.classList.toggle('_cross');
            menuBody.classList.toggle('_active');
        })
    }
})
// =========================================================================================================
// Choose slider
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.choose__items');
    const allItems = Array.from(document.querySelectorAll('.choose__item'));
    const circlesContainer = document.querySelector('.choose__circles');
    const list = document.querySelector('.choose__list');
    let currentIndex = 0;

    if (!list) {
        return;
    }

    const items = allItems.slice(0, 10);

    function updateVisibleItems() {
        const listWidth = list.offsetWidth;
        let itemsPerSlide;

        if (listWidth <= 467.98) {
            itemsPerSlide = 1;
        } else if (listWidth <= 767.98) {
            itemsPerSlide = 2;
        } else if (listWidth <= 990.98) {
            itemsPerSlide = 3;
        } else {
            itemsPerSlide = 4;
        }

        const totalSlides = Math.ceil(items.length / itemsPerSlide);

        if (currentIndex >= totalSlides) {
            currentIndex = totalSlides - 1;
        }

        circlesContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const circle = document.createElement('div');
            circle.classList.add('choose__circle');
            if (i === currentIndex) circle.classList.add('_active');
            circle.dataset.index = i;
            circlesContainer.appendChild(circle);
        }

        const circles = document.querySelectorAll('.choose__circle');
        circles.forEach(circle => {
            circle.addEventListener('click', function () {
                currentIndex = parseInt(this.dataset.index);
                updateSlider(itemsPerSlide);
            });
        });

        updateSlider(itemsPerSlide);
    }

    function updateSlider(itemsPerSlide) {
        const itemWidth = list.offsetWidth / itemsPerSlide;

        slider.style.transform = `translateX(-${currentIndex * itemWidth * itemsPerSlide}px)`;

        const circles = document.querySelectorAll('.choose__circle');
        circles.forEach(circle => circle.classList.remove('_active'));
        if (circles[currentIndex]) {
            circles[currentIndex].classList.add('_active');
        }
    }

    window.addEventListener('resize', function () {
        updateVisibleItems();
    });

    updateVisibleItems();
});
// =========================================================================================================
// Set same height for items in Catalog block
document.addEventListener('DOMContentLoaded', function () {
    function setEqualHeight() {
        const descElements = document.querySelectorAll('.item-catalog__desc');
        const serviceTitles = document.querySelectorAll('.item-services__title');
        const serviceDescs = document.querySelectorAll('.item-services__body');

        let maxDescHeight = 0;
        let maxTitleHeight = 0;
        let maxServiceDescHeight = 0;

        // Reset height and calculate max height for Catalog descriptions
        descElements.forEach(element => {
            element.style.height = 'auto';
            const height = element.offsetHeight;
            if (height > maxDescHeight) {
                maxDescHeight = height;
            }
        });

        // Reset height and calculate max height for Service titles
        serviceTitles.forEach(title => {
            title.style.height = 'auto';
            const height = title.offsetHeight;
            if (height > maxTitleHeight) {
                maxTitleHeight = height;
            }
        });

        // Reset height and calculate max height for Service descriptions
        serviceDescs.forEach(desc => {
            desc.style.height = 'auto';
            const height = desc.offsetHeight;
            if (height > maxServiceDescHeight) {
                maxServiceDescHeight = height;
            }
        });

        if (window.innerWidth >= 768) {
            // Set equal heights for Catalog descriptions
            descElements.forEach(element => {
                element.style.height = `${maxDescHeight}px`;
            });
            // Set equal heights for Service titles
            serviceTitles.forEach(title => {
                title.style.height = `${maxTitleHeight}px`;
            });
            // Set equal heights for Service descriptions
            serviceDescs.forEach(desc => {
                desc.style.height = `${maxServiceDescHeight}px`;
            });
        } else {
            // Reset heights for all elements on small screens
            descElements.forEach(element => {
                element.style.height = 'auto';
            });
            serviceTitles.forEach(title => {
                title.style.height = 'auto';
            });
            serviceDescs.forEach(desc => {
                desc.style.height = 'auto';
            });
        }
    }

    setEqualHeight();

    window.addEventListener('resize', function () {
        // Debounce function to limit resize event calls
        clearTimeout(window.resizeTimeout);
        window.resizeTimeout = setTimeout(setEqualHeight, 100);
    });
});
// =========================================================================================================
// Questions block slider
document.addEventListener('DOMContentLoaded', function() {
    const slideCon = document.querySelector('.questions-slider__content ul');
    const slides = Array.from(document.querySelectorAll('.questions-slider__content ul li'));
    const arrowPrev = document.querySelector('.questions-slider__arrow.arrow-prev');
    const arrowNext = document.querySelector('.questions-slider__arrow.arrow-next');
    let currentIndex = 0;

    function updateSlider() {
        const offset = -currentIndex * 100;
        slideCon.style.transform = `translateX(${offset}%)`;
    }

    function showNextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }

    function showPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1;
        }
        updateSlider();
    }

    if (arrowNext) {
        arrowNext.addEventListener('click', showNextSlide);
    }

    if (arrowPrev) {
        arrowPrev.addEventListener('click', showPrevSlide);
    }
});
// =========================================================================================================
// production.html Page cards view buttons
document.addEventListener('DOMContentLoaded', function() {
    const viewList = document.getElementById('viewList');
    const viewGrid = document.getElementById('viewGrid');
    const cardsList = document.querySelector('.block-products__list');
    const cardBtns = document.querySelectorAll('.card-products__button'); 

    if(viewList) {
        viewList.addEventListener('click', function() {
            viewGrid.classList.remove('_active');
            viewList.classList.add('_active');
            cardsList.classList.remove('_grid');
            cardsList.classList.add('_list');
    
            cardBtns.forEach(button => {
                const card = button.closest('.card-products');
                const cardActions = card.querySelector('.card-products__actions');
                if (cardActions) {
                    cardActions.appendChild(button);
                }
            });
        });
    }

    if(viewGrid) {
        viewGrid.addEventListener('click', function() {
            viewList.classList.remove('_active');
            viewGrid.classList.add('_active');
            cardsList.classList.remove('_list');
            cardsList.classList.add('_grid');
    
            cardBtns.forEach(button => {
                const card = button.closest('.card-products');
                const cardBottom = card.querySelector('.card-products__bottom');
                if (cardBottom) {
                    cardBottom.appendChild(button);
                }
            });
    
        });
    }    
});
// =========================================================================================================
// production.html Page custom select and pagination
// document.addEventListener('DOMContentLoaded', function () {
//     const productTabs = document.querySelectorAll('.column-products__item a');
//     const productItems = document.querySelectorAll('.block-products__item');
//     const productList = document.getElementById('cardsContainer');
//     let filteredItems = Array.from(productItems); 
//     let currentPage = 1;
//     const cardsPerPage = 24;
//     let selectedCategory = '';
//     let selectedCriteria = '';

//     if(productTabs && productItems) {
//             function displayCards(page) {
//                 const start = (page - 1) * cardsPerPage;
//                 const end = start + cardsPerPage;

//                 if(productList) {
//                     productList.innerHTML = '';
//                 }

//                 if (filteredItems.length > 0) {
//                     filteredItems.slice(start, end).forEach(item => {
//                         productList.appendChild(item);
//                     });
//                 } else {
//                     if(productList) {
//                         productList.innerHTML = '<p>No products found.</p>';
//                     }
//                 }
//             }

//             if(document.getElementById('page-numbers')) {
//                 function createPagination() {
//                     const pageNumbers = document.getElementById('page-numbers');
//                     pageNumbers.innerHTML = '';
    
//                     const totalPages = Math.ceil(filteredItems.length / cardsPerPage);
    
//                     if (totalPages > 1) {
//                         for (let i = 1; i <= totalPages; i++) {
//                             const pageNumber = document.createElement('span');
//                             pageNumber.textContent = i;
//                             pageNumber.classList.add('page-number');
//                             if (i === currentPage) {
//                                 pageNumber.classList.add('_active');
//                             }
//                             pageNumber.addEventListener('click', () => {
//                                 currentPage = i;
//                                 displayCards(currentPage);
//                                 createPagination();
//                             });
//                             pageNumbers.appendChild(pageNumber);
//                         }
    
//                         document.getElementById('prev-btn').style.display = currentPage > 1 ? 'inline-block' : 'none';
//                         document.getElementById('next-btn').style.display = currentPage < totalPages ? 'inline-block' : 'none';
//                     } else {
//                         document.getElementById('prev-btn').style.display = 'none';
//                         document.getElementById('next-btn').style.display = 'none';
//                     }
//                 }
//             }
            
//             productTabs.forEach(tab => {
//                 tab.addEventListener('click', function (e) {
//                     e.preventDefault();

//                     productTabs.forEach(tab => tab.classList.remove('_active'));
//                     tab.classList.add('_active');

//                     selectedCategory = this.getAttribute('data-tab');
                    
//                     filterProducts(selectedCriteria);
//                     createPagination();
//                     displayCards(1);
//                 });
//             });

//             function filterProducts(criteria) {
//                 filteredItems = Array.from(productItems);

//                 if (selectedCategory) {
//                     filteredItems = filteredItems.filter(item => item.getAttribute('data-item') === selectedCategory);
//                 }

//                 if (criteria === 'cheap') {
//                     filteredItems.sort((a, b) => parseInt(a.getAttribute('data-price')) - parseInt(b.getAttribute('data-price')));
//                 } else if (criteria === 'expensive') {
//                     filteredItems.sort((a, b) => parseInt(b.getAttribute('data-price')) - parseInt(a.getAttribute('data-price')));
//                 }

//                 currentPage = 1;
//             }

//             if(document.getElementById('selectBox')) {
//                 document.getElementById('selectBox').addEventListener('click', function (e) {
//                     e.stopPropagation();
//                     this.classList.toggle('_active');
//                     document.querySelector('.select-filter').classList.toggle('_blue-light');
//                 });
//             }

//             document.querySelectorAll('.select-filter__option').forEach(option => {
//                 option.addEventListener('click', function (e) {
//                     e.stopPropagation();
//                     selectedCriteria = this.getAttribute('data-option');
//                     document.querySelector('.select-filter__selected').textContent = this.textContent;

//                     filterProducts(selectedCriteria);
//                     createPagination();
//                     displayCards(1);

//                     document.getElementById('selectBox').classList.remove('_active');
//                     document.querySelector('.select-filter').classList.remove('_blue-light');
//                 });
//             });

//             document.addEventListener('click', function (e) {
//                 if (!document.getElementById('selectBox').contains(e.target)) {
//                     document.getElementById('selectBox').classList.remove('_active');
//                     document.querySelector('.select-filter').classList.remove('_blue-light');
//                 }
//             });

//             if(document.getElementById('prev-btn')) {
//                 document.getElementById('prev-btn').addEventListener('click', () => {
//                     if (currentPage > 1) {
//                         currentPage--;
//                         displayCards(currentPage);
//                         createPagination();
//                     }
//                 });
//             }
            
//             if(document.getElementById('next-btn')) {
//                 document.getElementById('next-btn').addEventListener('click', () => {
//                     if (currentPage < Math.ceil(filteredItems.length / cardsPerPage)) {
//                         currentPage++;
//                         displayCards(currentPage);
//                         createPagination();
//                     }
//                 });
//             }
            
//             filterProducts(''); 
//             createPagination();
//             displayCards(currentPage);
//     }
// });
// =========================================================================================================
// production.html Page Type Items
// document.addEventListener("DOMContentLoaded", function () {
//     const productTabs = document.querySelectorAll('.column-products__item a');
//     const products = document.querySelectorAll('.block-products__item');
//     const productsTypesBlock = document.getElementById('types-block');
//     let productsTypes = [];

//     if (productsTypesBlock) {
//         productsTypes = productsTypesBlock.querySelectorAll('.item-sub-category');
//     }

//     if (productTabs.length > 0) {
//         productTabs.forEach(tab => {
//             tab.addEventListener('click', function (e) {
//                 e.preventDefault();

//                 productTabs.forEach(tab => tab.classList.remove('_active'));
//                 tab.classList.add('_active');
                
//                 if (window.innerWidth < 766.98 && document.querySelector('.top-products__frame')?.classList.contains('_active')) {
//                     document.querySelector('.top-products__frame').classList.remove('_active');
//                     document.querySelector('.choose-products').classList.remove('_active');
//                 }

//                 const productCategory = this.getAttribute('data-tab');
//                 let hasTypes = false;

//                 products.forEach(product => {
//                     product.classList.remove('_active');
//                     if (product.getAttribute('data-item') === productCategory) {
//                         product.classList.add('_active');
//                         if (product.hasAttribute('data-type')) {
//                             hasTypes = true;
//                         }
//                     }
//                 });

//                 if (hasTypes && productsTypesBlock) {
//                     productsTypesBlock.style.display = 'flex';

//                     productsTypes.forEach(type => {
//                         const typeCategory = type.getAttribute('data-type').split('-')[0];
//                         if (typeCategory === productCategory) {
//                             type.classList.add('_active');
//                         } else {
//                             type.classList.remove('_active');
//                         }
//                     });
//                 } else if (productsTypesBlock) {
//                     productsTypesBlock.style.display = 'none';
//                 }
//             });
//         });
//     }

//     if (productsTypes.length > 0) {
//         productsTypes.forEach(type => {
//             type.addEventListener('click', function () {
//                 const selectedType = this.getAttribute('data-type');
//                 products.forEach(product => {
//                     product.classList.remove('_active');
//                     if (product.getAttribute('data-type') === selectedType) {
//                         product.classList.add('_active');
//                     }
//                 });

//                 productsTypes.forEach(t => t.classList.remove('_selected'));
//                 this.classList.add('_selected');
//             });
//         });
//     }
// });
document.addEventListener('DOMContentLoaded', function () {
    const productTabs = document.querySelectorAll('.column-products__item a');
    const productItems = document.querySelectorAll('.block-products__item');
    const productList = document.getElementById('cardsContainer');
    let filteredItems = Array.from(productItems);
    let currentPage = 1;
    const cardsPerPage = 24;
    let selectedCategory = '';
    let selectedCriteria = '';

    function displayCards(page) {
        filterProducts(selectedCriteria); // Обновляем фильтр перед отображением
        const start = (page - 1) * cardsPerPage;
        const end = start + cardsPerPage;

        productList.innerHTML = '';
        const pageItems = filteredItems.slice(start, end);

        if (pageItems.length > 0) {
            pageItems.forEach(item => productList.appendChild(item));
        } else {
            productList.innerHTML = '<p>No products found.</p>';
        }
    }

    function createPagination() {
        const pageNumbers = document.getElementById('page-numbers');
        pageNumbers.innerHTML = '';

        const totalPages = Math.ceil(filteredItems.length / cardsPerPage);

        if (totalPages > 1) {
            for (let i = 1; i <= totalPages; i++) {
                const pageNumber = document.createElement('span');
                pageNumber.textContent = i;
                pageNumber.classList.add('page-number');
                if (i === currentPage) {
                    pageNumber.classList.add('_active');
                }
                pageNumber.addEventListener('click', () => {
                    currentPage = i;
                    displayCards(currentPage);
                    createPagination();
                });
                pageNumbers.appendChild(pageNumber);
            }

            document.getElementById('prev-btn').style.display = currentPage > 1 ? 'inline-block' : 'none';
            document.getElementById('next-btn').style.display = currentPage < totalPages ? 'inline-block' : 'none';
        } else {
            document.getElementById('prev-btn').style.display = 'none';
            document.getElementById('next-btn').style.display = 'none';
        }
    }

    productTabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            productTabs.forEach(tab => tab.classList.remove('_active'));
            tab.classList.add('_active');

            selectedCategory = this.getAttribute('data-tab');
            currentPage = 1;
            filterProducts(selectedCriteria);
            createPagination();
            displayCards(currentPage);
        });
    });

    function filterProducts(criteria) {
        filteredItems = Array.from(productItems);

        if (selectedCategory) {
            filteredItems = filteredItems.filter(item => item.getAttribute('data-item') === selectedCategory);
        }

        if (criteria === 'cheap') {
            filteredItems.sort((a, b) => parseInt(a.getAttribute('data-price')) - parseInt(b.getAttribute('data-price')));
        } else if (criteria === 'expensive') {
            filteredItems.sort((a, b) => parseInt(b.getAttribute('data-price')) - parseInt(a.getAttribute('data-price')));
        }
    }

    document.getElementById('selectBox').addEventListener('click', function (e) {
        e.stopPropagation();
        this.classList.toggle('_active');
        document.querySelector('.select-filter').classList.toggle('_blue-light');
    });

    document.querySelectorAll('.select-filter__option').forEach(option => {
        option.addEventListener('click', function (e) {
            e.stopPropagation();
            selectedCriteria = this.getAttribute('data-option');
            document.querySelector('.select-filter__selected').textContent = this.textContent;

            currentPage = 1;
            filterProducts(selectedCriteria);
            createPagination();
            displayCards(currentPage);

            document.getElementById('selectBox').classList.remove('_active');
            document.querySelector('.select-filter').classList.remove('_blue-light');
        });
    });

    document.addEventListener('click', function (e) {
        if (!document.getElementById('selectBox').contains(e.target)) {
            document.getElementById('selectBox').classList.remove('_active');
            document.querySelector('.select-filter').classList.remove('_blue-light');
        }
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayCards(currentPage);
            createPagination();
        }
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentPage < Math.ceil(filteredItems.length / cardsPerPage)) {
            currentPage++;
            displayCards(currentPage);
            createPagination();
        }
    });

    filterProducts('');
    createPagination();
    displayCards(currentPage);
});

// =========================================================================================================
// production.html Page Categorys Button at 766.98px
document.addEventListener('DOMContentLoaded', function() {
    const chooseBtn = document.querySelector('.choose-products');
    const chooseContent = document.querySelector('.top-products__metal');

    if (window.innerWidth < 766.98) {
        chooseBtn.addEventListener('click', function(event) {
            chooseBtn.classList.toggle('_active');
            chooseContent.classList.toggle('_active');
            event.stopPropagation();
        });

        document.addEventListener('click', function(event) {
            if (!chooseBtn.contains(event.target) && !chooseContent.contains(event.target)) {
                chooseBtn.classList.remove('_active');
                chooseContent.classList.remove('_active');
            }
        });
    }
});
// =========================================================================================================
// production.html Card Title Height
document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.card-products__title');

    function setEqualHeight() {
        if (document.querySelector('.block-products__item')) {
            let maxHeight = 0;

            titles.forEach(title => {
                title.style.height = 'auto';
            });
            titles.forEach(title => {
                if (title.offsetHeight > maxHeight) {
                    maxHeight = title.offsetHeight;
                }
            });
            titles.forEach(title => {
                title.style.height = `${maxHeight}px`;
            });
        }
    }

    setEqualHeight();
    const observer = new MutationObserver(() => {
        setEqualHeight();
    });

    const config = {
        childList: true,
        subtree: true
    };

    const targetNode = document.querySelector('.block-products');
    if (targetNode) {
        observer.observe(targetNode, config);
    }
    
    window.addEventListener('resize', setEqualHeight);
});
// =========================================================================================================
// productSingle.html Item gallery
document.addEventListener('DOMContentLoaded', function() {
    const thumbnailImages = document.querySelectorAll('.thumbnails__image');
    const arrowPrev = document.querySelector('.thumbnails__arrow-prev');
    const arrowNext = document.querySelector('.thumbnails__arrow-next');

    if(thumbnailImages.length > 0) {
        const images = ['img/main/single/product1.png', 'img/main/single/product2.png', 'img/main/single/product3.png'];
    let currentImageIndex = 0;

    function updateActiveThumbnail() {
        thumbnailImages.forEach(thumbnail => thumbnail.classList.remove('_active'));
        thumbnailImages[currentImageIndex].classList.add('_active');
    }

    function changeImage(imageSrc) {
        document.getElementById('mainImage').src = imageSrc;
        currentImageIndex = images.indexOf(imageSrc);
        updateActiveThumbnail();
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        document.getElementById('mainImage').src = images[currentImageIndex];
        updateActiveThumbnail();
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        document.getElementById('mainImage').src = images[currentImageIndex];
        updateActiveThumbnail();
    }

    thumbnailImages.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            changeImage(images[index]);
        });
    });

    arrowPrev.addEventListener('click', prevImage);
    arrowNext.addEventListener('click', nextImage);

    updateActiveThumbnail();
    }
});
// =========================================================================================================
// productSingle.html item rating
document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.rating__star');
    let currentRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', function () {
            currentRating = this.getAttribute('data-starValue');
            updateStars(currentRating);
        });

        star.addEventListener('mouseover', function () {
            const hoverRating = this.getAttribute('data-starValue');
            updateStars(hoverRating);
        });

        star.addEventListener('mouseout', function () {
            updateStars(currentRating);
        });
    });

    function updateStars(rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-starValue') <= rating) {
                star.classList.add('__selected');
            } else {
                star.classList.remove('__selected');
            }
        });
    }
});
// =========================================================================================================
// cart.html Item Add to cart
document.addEventListener('DOMContentLoaded', function () {
    const cart = {
        items: JSON.parse(localStorage.getItem('cart'))?.items || [],
        totalPrice: JSON.parse(localStorage.getItem('cart'))?.totalPrice || 0,
    };

    // Function to update the cart count in the header
    function updateCartCount() {
        const cartCountElement = document.getElementById('basketCount'); // Change selector to match your HTML structure
        const totalCount = cart.items.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = totalCount > 0 ? totalCount : '0';
    }

    function addToCart(productId, productName, productPrice, productImage) {
        const existingItem = cart.items.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.items.push({
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1,
            });
        }
        cart.totalPrice += productPrice;
        saveCart();
        updateCartCount(); // Update cart count after adding an item
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    document.querySelectorAll('.cart-add').forEach(add => {
        add.addEventListener('click', (event) => {
            const productId = event.target.dataset.productId;
            const productName = event.target.closest('.product-add').querySelector('.product-add__title').textContent;
            const productPrice = parseInt(event.target.closest('.product-add').querySelector('.product-add__price').textContent);
            const productImage = event.target.closest('.product-add').querySelector('.product-add__image').src;

            addToCart(productId, productName, productPrice, productImage);
        });
    });

    updateCartCount(); // Call to update the cart count on page load
});
// =========================================================================================================
// cart.html return button
document.addEventListener('DOMContentLoaded', function() {
    if(document.querySelector('.return-button__button')) {
        document.querySelector('.return-button__button').addEventListener('click', function () {
            window.history.back();
        });
    }
})
// =========================================================================================================
// Footer Tabs
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tabs-footer__tab');
    const tabContents = document.querySelectorAll('.content-tabs__item');
    const submenuLinks = document.querySelectorAll('.content-tabs__link');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach((t) => t.classList.remove('_active'));
            tabContents.forEach((content) => content.style.display = 'none');

            tab.classList.add('_active');
            const category = tab.dataset.category;
            const activeContent = document.getElementById(category);
            if (activeContent) {
                activeContent.style.display = 'flex';
            }
        });
    });

    submenuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            const submenuId = link.dataset.submenu;
            const submenu = document.getElementById(submenuId);

            if (submenu) {
                if (submenu.classList.contains('_active')) {
                    submenu.classList.remove('_active');
                    link.classList.remove('_active');
                    submenu.style.maxHeight = submenu.scrollHeight + 'px';
                    setTimeout(() => {
                        submenu.style.maxHeight = '0';
                    }, 1);
                } else {
                    submenu.style.maxHeight = submenu.scrollHeight + 'px';
                    submenu.classList.add('_active');
                    link.classList.add('_active');

                    submenu.addEventListener(
                        'transitionend',
                        () => {
                            if (submenu.classList.contains('_active')) {
                                submenu.style.maxHeight = 'auto';
                            }
                        },
                        { once: true }
                    );
                }
            }
        });
    });
});
// =========================================================================================================












