.<template>
  <article class="card">
    <header class="header-card">
      <div class="header-card-info">
        <profile-image class="profile-image" image="person.png"></profile-image>
        <h5 class="title"> PErson1</h5>
      </div>
      <font-awesome-icon class="header-search-icon" icon="ellipsis-h"/>
    </header>
    <div class="card-wrapper-image">
      <img src="@/assets/images/content.jpg" class="content-image" alt="">
    </div>
    <div class="wrapper-actions">
      <div class="action-info">
        <span>
          <font-awesome-icon class="action-icon" :icon="['far', 'heart']"/>
        </span>
        <span>
          <font-awesome-icon class="action-icon" :icon="['far', 'comment']"/>
        </span>
        <span>
          <font-awesome-icon class="action-icon" :icon="['fas', 'location-arrow']"/>
        </span>
      </div>
      <span>
        <font-awesome-icon class="action-icon" :icon="['far', 'bookmark']"/>
      </span>
    </div>
    <div class="wrapper-body">
      <p class="body-info-likes">1,465 Me gusta</p>
      <div class="body-info">
        <p v-if="!readMore" class="body-info-title">
          Person1 <span class="body-info-description">{{longText.slice(0,50)}}</span>
        </p>
        <p  v-if="readMore" class="body-info-title">
           Person1 <span class="body-info-description">{{longText}}</span>
        </p>
        <br>
      </div>
      <p @click="readMoreActive" v-if="!readMore" class="readmore">... más</p>
      <p class="body-info-comments">Ver los 3 comentarios</p>
      <p class="body-info-time">Hace 11 horas</p>
    </div>
    <div class="wrapper-footer">
      <div class="wrapper-comment">
        <font-awesome-icon class="action-icon" :icon="['far', 'smile']"/>
        <textarea name="comment" id="" cols="30" rows="10"
         placeholder="Agrega un comentario..."></textarea>
      </div>
      <button class="btn-comment">Publicar</button>
    </div>
  </article>
</template>

<script>
import ProfileImage from '@/components/ProfileImage.vue';

export default {
  name: 'ContentCard',
  components: {
    ProfileImage,
  },
  data() {
    return {
      longText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, non? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, non?',
      readMore: false,
    };
  },
  methods: {
    readMoreActive() {
      this.readMore = true;
    },
  },
};
</script>

<style scoped>
  .card{
    margin-bottom: 24px;
    border: 1px solid rgba(219,219,219,1);
    border-radius: 3px;
  }
  .header-card {
    border-bottom: 1px solid rgba(239,239,239,1);
    background-color: rgba(255,255,255,1);
    height: 60px;
    padding: 14px 16px 14px 16px;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .profile-image{
    height: 35px;
    width: 35px;
  }
  .header-card-info{
    display: flex;
    align-items: center;
  }
    .header-card .title{
    margin: 0;
    padding: 0;
    margin-left: 15px;
  }
  .content-image{
    object-fit: cover;
    height: 100%;
    width: 100%;
    max-height: 720px;
  }
  .wrapper-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    padding-bottom: 8px;
    padding-top: 6px;
  }
  .wrapper-actions span{
    padding: 8px;
  }
  .action-icon{
    height: 24px;
    width: 24px;
  }

  .body-info {
    display: flex;
    align-items: center;
    position: relative;
  }
  .wrapper-body {

    padding: 0 16px;
  }

  .body-wrapper-info {
    display: flex;
    align-items: center;
  }
  .body-info-title{
    font-weight: bold;
    margin-right: 5px;
    font-size: 14px;
  }

  .readmore, .body-info-title, .body-info-time{
    margin-bottom: 4px;
  }
  .body-info-description{
    font-size: 14px;
    font-weight: 500;
  }
  .body-info-likes{
    margin-bottom: 8px;

    font-weight: 600;
  }
  .body-info-comments, .body-info-time, .body-info-likes {
    font-size: 14px;
  }

  .body-info-comments {
    height: 22px;
    box-sizing: border-box;
  }

  .body-info-comments, .body-info-time {
    color: rgba(142,142,142,1);
    font-size: 14px;
  }
  .body-info-time  {
    margin-bottom: 16px;
  }

  .wrapper-footer {
    padding: 6px 16px;
    border-top: 1px solid rgba(239,239,239,1);
    color: rgba(142,142,142,1);
    justify-content: space-between;
    line-height: 18px;
    display: flex;
    align-items: center;
  }
  .wrapper-comment textarea {
    background: 0 0;
    border: 0;
    color: rgba(38,38,38,1);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    height: 18px;
    max-height: 80px;
    font-family: sans-serif;
  }
  .wrapper-comment{
    display: flex;
    align-items: center;
  }

  .wrapper-comment .action-icon{
    padding: 8px 16px 8px 0;
  }
  .btn-comment{
    border: none;
    color: rgba(0,149,246,1);
    opacity: 0.3;
    font-size: 14px;
    font-weight: 600;
  }
</style>
