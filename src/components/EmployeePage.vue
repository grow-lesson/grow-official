<template>
  <div class="wrap">
    <Header />
    <main class="main">
      <section class="employee">
        <div class="employee-head">
          <MenuTitle :headingText="title" :headingSubText="subTitle" />
        </div>

        <div class="employee-main">
          <div class="employee-mainInner">
            <ul class="employee-list">
              <li v-for="(employee, index) in displayedEmployees" :key="index"
                class="employee-item wow animated fadeInUp">
                <a @click="goToEmployeeDetailPage(employee)" class="employee-link">
                  <div class="employee-profile">
                    <div class="employee-imageBox">
                      <img :src="require(`@/assets/images/${employee.image}`)" alt="" class="employee-image" />
                    </div>
                    <div class="employee-work">
                      <div class="employee-joiningDayBox">
                      </div>
                      <div class="employee-descriptionBox">
                        <p class="employee-description">
                          {{ employee.position }}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <div class="pageNation-box">
              <ul class="pageNation-list">
                <li class="pageNation-item">
                  <a @click="goToPage(currentPage - 1)" :disabled="currentPage.value === 1" class="pageNation-button">
                    <div class="pageNation-previous"></div>
                  </a>
                </li>
                <li v-for="page in totalPages" :key="page" class="pageNation-item">
                  <a @click="goToPage(page)" :class="{ active: currentPage.value === page }" class="pageNation-button">
                    <div class="pageNation-numberBox">
                      <p class="pageNation-number">{{ page }}</p>
                    </div>
                  </a>
                </li>
                <li class="pageNation-item">
                  <a @click="goToPage(currentPage + 1)" :disabled="currentPage.value === totalPages"
                    class="pageNation-button">
                    <div class="pageNation-next"></div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  </div>
</template>

<script setup>
  import {
    ref,
    onMounted,
    computed
  } from "vue";
  import {
    useRouter
  } from "vue-router";
  import Header from "@/components/common/SideHeader.vue";
  import Footer from "@/components/common/Footer.vue";
  import MenuTitle from "@/components/common/MenuTitle.vue";
  import employees from "@/const/employees.js";

  const title = ref("社員紹介");
  const subTitle = ref("EMPLOYEE");

  const employeesRef = ref(employees);

  const router = useRouter();

  // Vue Routerを使用してページ間の遷移を行うメソッド
  const goToEmployeeDetailPage = (employee) => {
    router.push({
      name: "EmployeeDetailPage",
      params: {
        id: employee.id
      }
    });
  };

  const itemsPerPage = 6; // 1ページあたりの表示数

  const currentPageFromParams = Number(router.currentRoute.value.query.page) || 1;
  const currentPage = ref(currentPageFromParams);

  const totalPages = Math.ceil(employeesRef.value.length / itemsPerPage);

  const displayedEmployees = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return employeesRef.value.slice(startIndex, endIndex);
  });

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      currentPage.value = page;
      router.push({ name: "EmployeePage", query: { page: page } });
      window.scrollTo(0, 0);
    }
  };

  onMounted(() => {
    window.scrollTo(0, 0);
  });
</script>

<style>
  .wrap {
    display: flex;
  }

  @media (max-width: 1179px) {
    .main {
      width: 100%;
    }
  }

  @media (min-width: 1180px) {
    .main {
      width: 50%;
    }
  }

  @media (min-width: 580px) {
    .employee-list {
      display: none;
    }
  }

  @media (max-width: 580px) {
    .employee-list {
      display: none;
    }
  }

  .employee-mainInner {
    width: 90%;
    margin: 0 auto;
  }

  .employee {
    width: 100%;
    padding: 100px 0 0;
    background-color: #f6f1f1;
  }

  .employee-head {
    position: relative;
    font-weight: bold;

    margin: 0 auto;
    position: relative;
  }

  .employee-titleBox {
    width: 150px;
    height: 80px;
    position: relative;
  }

  .employee-link {
    cursor: pointer;
  }

  .employee-main {
    animation-name: fadeUpAnime;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    opacity: 0;
    margin-top: 60px;
  }

  .employee-list {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .employee-item {
    width: 100%;
    width: 100%;
    background: azure;
    border-radius: 15px;
  }

  .employee-image {
    width: 100%;
    height: 200px;
    border-radius: 15px 15px 0 0;
    object-fit: cover;
  }

  .employee-name {
    font-size: 25px;
    font-weight: bold;
  }

  .employee-joiningDay {
    font-size: 18px;
  }

  /* .employee-descriptionBox {
    margin-top: 15px;
  } */

  .employee-description {
    font-size: 18px;
  }

  .employee-work {
    padding: 18px;
  }

  .pageNation-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    margin-top: 60px;
    padding-bottom: 100px;
  }

  .pageNation-list {
    display: flex;
  }

  .pageNation-item {
    background-color: azure;
    width: 30px;
    height: 30px;
    border: solid 1px black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pageNation-item:nth-child(n + 2) {
    margin-left: 15px;
  }

  .pageNation-previous {
    position: relative;
    display: inline-block;
    padding: 10px;
  }

  .pageNation-numberBox {
    width: 30px;
  }

  .pageNation-number {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .pageNation-previous::before {
    content: "";
    width: 10px;
    height: 10px;
    border-top: solid 2px #949494;
    border-right: solid 2px #949494;
    position: absolute;
    left: 8px;
    top: 10px;
    transform: rotate(-135deg);
  }

  .pageNation-next {
    position: relative;
    display: inline-block;
    padding: 10px;
  }

  .pageNation-next::before {
    content: "";
    width: 10px;
    height: 10px;
    border-top: solid 2px #949494;
    border-right: solid 2px #949494;
    position: absolute;
    left: 4px;
    top: 10px;
    transform: rotate(45deg);
  }

  @keyframes fadeUpAnime {
    from {
      opacity: 0;
      transform: translateY(100px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 767px) {
    .employee-list {
      width: 100%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .employee-joiningDay {
      font-size: 16px;
    }

    .employee-description {
      font-size: 16px;
    }
  }
  
</style>