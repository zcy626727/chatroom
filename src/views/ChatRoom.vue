<template>
  <body>
    <!-- page loading -->
    <!-- <div class="page-loading"></div> -->
    <!-- ./ page loading -->

    <!-- disconnected modal -->
    <div
      class="modal fade"
      id="disconnected"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-lg modal-dialog-centered modal-dialog-zoom"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-body">
            <div class="row mb-5">
              <div class="col-md-6 offset-3">
                <img
                  src="../assets/media/svg/undraw_warning_cyit.svg"
                  class="img-fluid"
                  alt="image"
                />
              </div>
            </div>
            <p class="lead text-center">Application disconnected</p>
          </div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-success btn-lg">
              Reconnect
            </button>
            <a href="login.html" class="btn btn-link">Logout</a>
          </div>
        </div>
      </div>
    </div>
    <!-- ./ disconnected modal -->

    <!-- voice call modal -->
    <div
      class="modal call fade"
      id="call"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-zoom"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-body">
            <div class="call">
              <div>
                <figure class="mb-4 avatar avatar-xl">
                  <img
                    src="../assets/media/img/face.jpg"
                    class="rounded-circle"
                    alt="image"
                  />
                </figure>
                <h4>
                  Brietta Blogg <span class="text-success">calling...</span>
                </h4>
                <div class="action-button">
                  <button
                    type="button"
                    class="btn btn-danger btn-floating btn-lg"
                    data-dismiss="modal"
                  >
                    <i class="fa fa-times fa-2x"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-success btn-pulse btn-floating btn-lg"
                  >
                    <i class="fa fa-phone fa-2x"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ./ voice call modal -->

    <!-- voice call modal -->
    <div
      class="modal call fade"
      id="videoCall"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-zoom"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-body">
            <div class="call">
              <div>
                <figure class="mb-4 avatar avatar-xl">
                  <img
                    src="../assets/media/img/face.jpg"
                    class="rounded-circle"
                    alt="image"
                  />
                </figure>
                <h4>
                  Brietta Blogg
                  <span class="text-success">video calling...</span>
                </h4>
                <div class="action-button">
                  <button
                    type="button"
                    class="btn btn-danger btn-floating btn-lg"
                    data-dismiss="modal"
                  >
                    <i class="fa fa-times fa-2x"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-success btn-pulse btn-floating btn-lg"
                  >
                    <i class="fa fa-video-camera fa-2x"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ./ voice call modal -->

    <!-- new group modal -->
    <div
      :class="{ modal: true, fade: true, show: newRoomForm.show }"
      id="newGroup"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-zoom"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i data-feather="users" class="mr-2"></i> 创建聊天室
            </h5>
          </div>
          <div class="modal-body">
            <el-form
              :rules="rules"
              :model="newRoomForm"
              ref="newRoomForm"
              label-position="left"
            >
              <el-form-item label="名称" prop="roomName">
                <el-input v-model="newRoomForm.roomName"></el-input>
              </el-form-item>
              <el-form-item label="描述" prop="description">
                <el-input
                  type="textarea"
                  rows="3"
                  v-model="newRoomForm.description"
                ></el-input>
              </el-form-item>
              <el-form-item label-width="30%">
                <el-button
                  type="primary"
                  :loading="newRoomForm.loading"
                  @click.prevent="clickNewRoom('newRoomForm')"
                  >立即创建</el-button
                >
                <el-button
                  data-dismiss="modal"
                  aria-label="Close"
                  @click="clickmodelClose('newRoomForm')"
                  >取消</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <!-- ./ new group modal -->

    <!-- join group modal -->
    <div
      :class="{ modal: true, fade: true, show: joinRoomForm.show }"
      id="joinRoom"
      role="dialog"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-lg modal-dialog-zoom"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i data-feather="users" class="mr-2"></i> 加入聊天室
            </h5>
          </div>
          <div class="modal-body">
            <el-form
              :inline="true"
              :model="joinRoomForm"
              class="demo-form-inline"
            >
              <el-form-item label="聊天室ID ">
                <el-input
                  v-model="joinRoomForm.rId"
                  placeholder="ID"
                ></el-input>
              </el-form-item>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <el-form-item label="聊天室名称">
                <el-input
                  v-model="joinRoomForm.roomName"
                  placeholder="名称"
                ></el-input>
              </el-form-item>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <el-form-item>
                <el-button
                  type="primary"
                  @click="searchRoom"
                  :loading="joinRoomForm.loading"
                  >查询</el-button
                >
              </el-form-item>
            </el-form>
            <el-table
              :data="joinRoomTableData"
              height="250"
              border
              style="width: 100%"
            >
              <el-table-column prop="rid" label="id" width="190">
              </el-table-column>
              <el-table-column prop="roomName" label="名称" width="190">
              </el-table-column>
              <el-table-column prop="createTime" label="创建时间">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template #default="scope">
                  <el-button
                    type="primary"
                    size="small"
                    :disabled="scope.row['disabled']"
                    @click="clickJoinRoom(scope.row)"
                    >{{ scope.row["stateTip"] }}</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <!-- ./ join group modal -->

    <!-- add friend modal -->
    <div
      :class="{ modal: true, fade: true, show: addFriendForm.show }"
      id="addFriend"
      role="dialog"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-lg modal-dialog-zoom"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i data-feather="users" class="mr-2"></i> 添加好友
            </h5>
          </div>
          <div class="modal-body">
            <el-form
              :inline="true"
              :model="addFriendForm"
              class="demo-form-inline"
            >
              <el-form-item label="用户ID ">
                <el-input
                  v-model="addFriendForm.uId"
                  placeholder="ID"
                ></el-input>
              </el-form-item>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <el-form-item label="用户昵称">
                <el-input
                  v-model="addFriendForm.nickname"
                  placeholder="昵称"
                ></el-input>
              </el-form-item>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <el-form-item>
                <el-button
                  type="primary"
                  @click="searcUser"
                  :loading="addFriendForm.loading"
                  >查询</el-button
                >
              </el-form-item>
            </el-form>
            <el-table
              :data="addFriendTableData"
              height="250"
              border
              style="width: 100%"
            >
              <el-table-column prop="uId" label="id" width="190">
              </el-table-column>
              <el-table-column prop="nickname" label="名称" width="190">
              </el-table-column>
              <el-table-column prop="regTime" label="注册时间">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template #default="scope">
                  <el-button
                    type="primary"
                    size="small"
                    :disabled="scope.row['disabled']"
                    @click="clickAddFriend(scope.row)"
                    >{{ scope.row["stateTip"] }}</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <!-- ./ add friend modal -->

    <!-- apply message modal -->
    <div
      class="modal fade"
      id="applyDetailMessageModel"
      role="dialog"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-lg modal-dialog-zoom"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i data-feather="users" class="mr-2"></i> 申请信息
            </h5>
          </div>
          <div class="modal-body">
            <el-form inline>
              <el-form-item style="width: 50%">
                <label style="font-size: 14px; color: #606266" for=""
                  >申请人ID&emsp;
                </label>
                <span style="font-size: 14px; color: #606266">{{
                  currentDetailMessage.senderId
                }}</span>
              </el-form-item>
              <el-form-item style=" ;">
                <label style="font-size: 14px; color: #606266" for=""
                  >申请人名&emsp;
                </label>
                <span style="font-size: 14px; color: #606266">{{
                  currentDetailMessage.senderName
                }}</span>
              </el-form-item>

              <el-form-item style="width: 50%">
                <label style="font-size: 14px; color: #606266" for=""
                  >目标ID&emsp;&emsp;
                </label>
                <span style="font-size: 14px; color: #606266">{{
                  currentDetailMessage.targetId
                }}</span>
              </el-form-item>
              <el-form-item style=" ;">
                <label style="font-size: 14px; color: #606266" for=""
                  >目标名&emsp;&emsp;
                </label>
                <span style="font-size: 14px; color: #606266">{{
                  currentDetailMessage.targetName
                }}</span>
              </el-form-item>

              <el-form-item style="width: 50%">
                <label style="font-size: 14px; color: #606266" for=""
                  >申请时间&emsp;
                </label>
                <span style="font-size: 14px; color: #606266">{{
                  currentDetailMessage.applyTime
                }}</span>
              </el-form-item>
              <el-form-item style=" ;">
                <label style="font-size: 14px; color: #606266" for=""
                  >申请类型&emsp;
                </label>
                <span style="font-size: 14px; color: #606266">{{
                  currentDetailMessage.type == 0
                    ? "申请加入聊天室"
                    : "申请添加好友"
                }}</span>
              </el-form-item>

              <el-form-item style="width: 100%">
                <label style="font-size: 14px; color: #606266" for=""
                  >申请信息&emsp;
                </label>
                <span style="font-size: 14px; color: #606266">{{
                  currentDetailMessage.content
                }}</span>
              </el-form-item>
              <el-form-item style="width: 100%">
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <el-button
                  @click="acceptApply(currentDetailMessage)"
                  :loading="currentDetailMessage.acceptLoading"
                  type="primary"
                  >同意</el-button
                >
                <el-button
                  @click="rejectApply(currentDetailMessage)"
                  :loading="currentDetailMessage.rejectLoading"
                  >拒绝</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <!-- ./ apply message modal -->

    <!-- setting modal -->
    <div
      class="modal fade"
      id="settingModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-zoom"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i data-feather="settings" class="mr-2"></i> Settings
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="ti-close"></i>
            </button>
          </div>
          <div class="modal-body">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  data-toggle="tab"
                  href="#account"
                  role="tab"
                  aria-controls="account"
                  aria-selected="true"
                  >Account</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  href="#notification"
                  role="tab"
                  aria-controls="notification"
                  aria-selected="false"
                  >Notification</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  >Security</a
                >
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane show active" id="account" role="tabpanel">
                <div class="form-item custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    checked
                    id="customSwitch1"
                  />
                  <label class="custom-control-label" for="customSwitch1"
                    >Allow connected contacts</label
                  >
                </div>
                <div class="form-item custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    checked
                    id="customSwitch2"
                  />
                  <label class="custom-control-label" for="customSwitch2"
                    >Confirm message requests</label
                  >
                </div>
                <div class="form-item custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    checked
                    id="customSwitch3"
                  />
                  <label class="custom-control-label" for="customSwitch3"
                    >Profile privacy</label
                  >
                </div>
                <div class="form-item custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customSwitch4"
                  />
                  <label class="custom-control-label" for="customSwitch4"
                    >Developer mode options</label
                  >
                </div>
                <div class="form-item custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    checked
                    id="customSwitch5"
                  />
                  <label class="custom-control-label" for="customSwitch5"
                    >Two-step security verification</label
                  >
                </div>
              </div>
              <div class="tab-pane" id="notification" role="tabpanel">
                <div class="form-item custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    checked
                    id="customSwitch6"
                  />
                  <label class="custom-control-label" for="customSwitch6"
                    >Allow mobile notifications</label
                  >
                </div>
                <div class="form-item custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customSwitch7"
                  />
                  <label class="custom-control-label" for="customSwitch7"
                    >Notifications from your friends</label
                  >
                </div>
                <div class="form-item custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customSwitch8"
                  />
                  <label class="custom-control-label" for="customSwitch8"
                    >Send notifications by email</label
                  >
                </div>
              </div>
              <div class="tab-pane" id="contact" role="tabpanel">
                <div class="form-item custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customSwitch9"
                  />
                  <label class="custom-control-label" for="customSwitch9"
                    >Suggest changing passwords every month.</label
                  >
                </div>
                <div class="form-item custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    checked
                    id="customSwitch10"
                  />
                  <label class="custom-control-label" for="customSwitch10"
                    >Let me know about suspicious entries to your account</label
                  >
                </div>
                <div class="form-item">
                  <p>
                    <a
                      class="btn btn-light"
                      data-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i data-feather="plus" class="mr-2"></i> Security
                      Questions
                    </a>
                  </p>
                  <div class="collapse" id="collapseExample">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Question 1"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Answer 1"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Question 2"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Answer 2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
    <!-- ./ setting modal -->

    <!-- edit profile modal -->
    <div
      class="modal fade"
      id="editProfileModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-zoom"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i data-feather="edit-2" class="mr-2"></i> Edit Profile
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="ti-close"></i>
            </button>
          </div>
          <div class="modal-body">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  data-toggle="tab"
                  href="#personal"
                  role="tab"
                  aria-controls="personal"
                  aria-selected="true"
                  >Personal</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  href="#about"
                  role="tab"
                  aria-controls="about"
                  aria-selected="false"
                  >About</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  href="#social-links"
                  role="tab"
                  aria-controls="social-links"
                  aria-selected="false"
                  >Social Links</a
                >
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane show active" id="personal" role="tabpanel">
                <form>
                  <div class="form-group">
                    <label for="fullname" class="col-form-label"
                      >Fullname</label
                    >
                    <div class="input-group">
                      <input type="text" class="form-control" id="fullname" />
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i data-feather="user"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Avatar</label>
                    <div class="d-flex align-items-center">
                      <div>
                        <figure class="avatar mr-3 item-rtl">
                          <img
                            src="../assets/media/img/face.jpg"
                            class="rounded-circle"
                            alt="image"
                          />
                        </figure>
                      </div>

                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="customFile"
                        />
                        <label class="custom-file-label" for="customFile"
                          >Choose file</label
                        >
                      </div>
                    </div>
                    ___
                  </div>
                  <div class="form-group">
                    <label for="city" class="col-form-label">City</label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        id="city"
                        placeholder="Ex: Columbia"
                      />
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i data-feather="target"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="phone" class="col-form-label">Phone</label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        id="phone"
                        placeholder="(555) 555 55 55"
                      />
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i data-feather="phone"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="website" class="col-form-label">Website</label>
                    <input
                      type="text"
                      class="form-control"
                      id="website"
                      placeholder="https://"
                    />
                  </div>
                </form>
              </div>
              <div class="tab-pane" id="about" role="tabpanel">
                <form>
                  <div class="form-group">
                    <label for="about-text" class="col-form-label"
                      >Write a few words that describe you</label
                    >
                    <textarea class="form-control" id="about-text"></textarea>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      checked
                      id="customCheck1"
                    />
                    <label class="custom-control-label" for="customCheck1"
                      >View profile</label
                    >
                  </div>
                </form>
              </div>
              <div class="tab-pane" id="social-links" role="tabpanel">
                <form>
                  <div class="form-group">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                      />
                      <div class="input-group-append">
                        <span class="input-group-text bg-facebook">
                          <i class="ti-facebook"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                      />
                      <div class="input-group-append">
                        <span class="input-group-text bg-twitter">
                          <i class="ti-twitter"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                      />
                      <div class="input-group-append">
                        <span class="input-group-text bg-instagram">
                          <i class="ti-instagram"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                      />
                      <div class="input-group-append">
                        <span class="input-group-text bg-linkedin">
                          <i class="ti-linkedin"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                      />
                      <div class="input-group-append">
                        <span class="input-group-text bg-dribbble">
                          <i class="ti-dribbble"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                      />
                      <div class="input-group-append">
                        <span class="input-group-text bg-youtube">
                          <i class="ti-youtube"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                      />
                      <div class="input-group-append">
                        <span class="input-group-text bg-google">
                          <i class="ti-google"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                      />
                      <div class="input-group-append">
                        <span class="input-group-text bg-whatsapp">
                          <i class="fa fa-whatsapp"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
    <!-- ./ edit profile modal -->

    <!-- layout -->
    <div class="layout">
      <!-- navigation -->
      <nav class="navigation">
        <div class="nav-group">
          <ul>
            <!-- 图标 -->
            <li class="logo">
              <a>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="612px"
                  height="612px"
                  viewBox="0 0 612 612"
                  style="enable-background: new 0 0 612 612"
                  xml:space="preserve"
                >
                  <g>
                    <g id="_x32__26_">
                      <g>
                        <path
                          d="M401.625,325.125h-191.25c-10.557,0-19.125,8.568-19.125,19.125s8.568,19.125,19.125,19.125h191.25
                                    c10.557,0,19.125-8.568,19.125-19.125S412.182,325.125,401.625,325.125z M439.875,210.375h-267.75
                                    c-10.557,0-19.125,8.568-19.125,19.125s8.568,19.125,19.125,19.125h267.75c10.557,0,19.125-8.568,19.125-19.125
                                    S450.432,210.375,439.875,210.375z M306,0C137.012,0,0,119.875,0,267.75c0,84.514,44.848,159.751,114.75,208.826V612
                                    l134.047-81.339c18.552,3.061,37.638,4.839,57.203,4.839c169.008,0,306-119.875,306-267.75C612,119.875,475.008,0,306,0z
                                    M306,497.25c-22.338,0-43.911-2.601-64.643-7.019l-90.041,54.123l1.205-88.701C83.5,414.133,38.25,345.513,38.25,267.75
                                    c0-126.741,119.875-229.5,267.75-229.5c147.875,0,267.75,102.759,267.75,229.5S453.875,497.25,306,497.25z"
                        />
                      </g>
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </a>
            </li>
            <li>
              <!-- data-navigation-target：导航的目标 chats为侧边的id值 -->
              <a
                :class="{ active: activeSidebar == 'chats' }"
                data-navigation-target="chats"
                data-toggle="tooltip"
                title="聊天室"
                data-placement="right"
                @click="sideNavClick('chats')"
              >
                <!-- <span class="badge badge-warning"></span> -->
                <i class="fa fa-comment-o"></i>
              </a>
            </li>
            <li>
              <a
                :class="{ active: activeSidebar == 'friends' }"
                data-navigation-target="friends"
                data-toggle="tooltip"
                title="好友"
                data-placement="right"
                @click="sideNavClick('friends')"
              >
                <!-- <span class="badge badge-danger"></span> -->
                <i class="fa fa-user-o"></i>
              </a>
            </li>
            <li class="applyMessage">
              <a
                :class="{ active: activeSidebar == 'applyMessage' }"
                data-navigation-target="applyMessage"
                data-toggle="tooltip"
                title="消息"
                data-placement="right"
                @click="sideNavClick('applyMessage')"
              >
                <i class="fa fa-envelope-open-o"></i>
              </a>
            </li>
            <li>
              <a
                :class="{ active: activeSidebar == 'music' }"
                data-navigation-target="music"
                data-toggle="tooltip"
                title="音乐"
                data-placement="right"
                @click="sideNavClick('music')"
              >
                <i class="fa fa-music"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <!-- ./ navigation -->

      <!-- content -->
      <div class="content">
        <!-- sidebar group -->
        <div class="sidebar-group">
          <!-- Chats sidebar -->
          <div
            id="chats"
            :class="{ sidebar: true, active: activeSidebar == 'chats' }"
          >
            <!-- 标题 -->
            <header>
              <span>聊天室</span>
              <!-- 聊天室头部 -->
              <ul class="list-inline">
                <li
                  class="list-inline-item"
                  data-toggle="tooltip"
                  title="创建聊天室"
                >
                  <!-- 按钮图标 -->
                  <a
                    class="btn btn-outline-light"
                    data-toggle="modal"
                    data-target="#newGroup"
                  >
                    <i class="fa fa-plus"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="btn btn-outline-light"
                    data-toggle="modal"
                    title="加入聊天室"
                    data-navigation-target="friends"
                    data-target="#joinRoom"
                  >
                    <i class="fa fa-users"></i>
                  </a>
                </li>
                <!-- d-xl-none：图标隐藏  d-inline：行内 -->
                <li class="list-inline-item d-inline">
                  <a
                    @click="sideNavClick('')"
                    class="btn btn-outline-light text-danger sidebar-close"
                    title="关闭列表"
                  >
                    <i class="fa fa-times"></i>
                  </a>
                </li>
              </ul>
            </header>

            <form>
              <!-- 搜索框 -->
              <input
                type="text"
                class="form-control"
                placeholder="Search chatRoom"
              />
            </form>

            <!-- ChatRoom sidebar -->
            <div ref="chatRoomItems" class="sidebar-body">
              <ul class="list-group list-group-flush" style="overflow: visible">
                <li
                  v-for="(item, key, index) in chatRooms"
                  :key="index"
                  class="list-group-item"
                  @click="clickChatRoomItem(item)"
                >
                  <div>
                    <figure v-if="!item.roomFace" class="avatar">
                      <!-- <span class="avatar-title bg-success rounded-circle"
                        >C</span
                      > -->
                      <img
                        src="../assets/media/img/face.jpg"
                        class="rounded-circle"
                        alt="image"
                      />
                    </figure>
                    <figure v-else class="avatar">
                      <img
                        src="../assets/media/img/face.jpg"
                        class="rounded-circle"
                        alt="image"
                      />
                    </figure>
                  </div>

                  <!-- 介绍部分 -->
                  <div class="users-list-body">
                    <div :title="item.roomName">
                      <!-- 群聊名称 -->
                      <h5
                        :class="{
                          'text-primary':
                            item.uid == $store.getters.getLoginInfo.uId,
                        }"
                      >
                        {{ item.roomName }}
                      </h5>
                      <!-- 签名 -->
                      <p>{{ item.motto }}</p>
                    </div>

                    <!-- 消息提示 -->
                    <div class="users-list-action">
                      <!-- 最近修改时间 -->
                      <small
                        :class="{
                          'text-primary':
                            item.uid == $store.getters.getLoginInfo.uId,
                        }"
                        >{{ item.lastMsgTime }}</small
                      >

                      <!-- 更多 -->
                      <div class="action-toggle">
                        <div class="action-toggle">
                          <div class="dropdown">
                            <a data-toggle="dropdown">
                              <i class="fa fa-ellipsis-h"></i>
                            </a>
                            <!-- 点击后显示 -->
                            <div class="dropdown-menu dropdown-menu-right">
                              <!-- <a class="dropdown-item">详细信息</a> -->
                              <a
                                data-navigation-target="contact-information"
                                class="dropdown-item"
                                @click.prevent="
                                  clickReportRoom(item.rid, item.roomName)
                                "
                                >举报聊天室</a
                              >
                              <div class="dropdown-divider"></div>
                              <a
                                v-if="
                                  item.uid == $store.getters.getLoginInfo.uId
                                "
                                class="dropdown-item text-danger"
                                @click.prevent="
                                  clickDeleteRoom(item.rid, item.roomName)
                                "
                                >解散聊天室</a
                              >
                              <a
                                v-else
                                class="dropdown-item text-danger"
                                @click.prevent="
                                  clickOutRoom(item.rid, item.roomName)
                                "
                                >退出聊天室</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- ./ ChatRoom sidebar -->

          <!-- Friends sidebar -->
          <div
            id="friends"
            :class="{ sidebar: true, active: activeSidebar == 'friends' }"
          >
            <!-- 好友头部 -->
            <header>
              <span>好友列表</span>
              <!-- 添加好友 -->
              <ul class="list-inline">
                <li
                  class="list-inline-item"
                  data-toggle="tooltip"
                  title="添加好友"
                >
                  <a
                    class="btn btn-outline-light"
                    data-toggle="modal"
                    data-target="#addFriend"
                  >
                    <i class="fa fa-user-plus"></i>
                  </a>
                </li>
                <li class="list-inline-item d-inline">
                  <a
                    @click="sideNavClick('')"
                    class="btn btn-outline-light text-danger sidebar-close"
                    title="关闭列表"
                  >
                    <i class="fa fa-times"></i>
                  </a>
                </li>
              </ul>
            </header>
            <!-- 查找好友 -->
            <form>
              <input
                type="text"
                class="form-control"
                placeholder="Search friends"
              />
            </form>

            <!-- 好友列表 -->
            <div ref="friendItems" class="sidebar-body">
              <ul class="list-group list-group-flush">
                <li
                  v-for="(item, key, index) in friends"
                  :key="index"
                  class="list-group-item"
                  data-navigation-target="chats"
                  @click="clickFriendItem(item)"
                >
                  <!-- 头像 -->
                  <div>
                    <figure v-if="!item.userFace" class="avatar">
                      <!-- <span class="avatar-title bg-danger rounded-circle"
                        >F</span
                      > -->
                      <img
                        src="../assets/media/img/face.jpg"
                        class="rounded-circle"
                        alt="image"
                      />
                    </figure>
                    <figure v-else class="avatar">
                      <img
                        src="../assets/media/img/face.jpg"
                        class="rounded-circle"
                        alt="image"
                      />
                    </figure>
                  </div>
                  <div class="users-list-body">
                    <!-- 名字、消息/签名 -->
                    <div>
                      <h5>{{ item.nickname }}</h5>
                      <p>{{ item.motto }}</p>
                    </div>
                    <!-- 更多 -->
                    <div class="users-list-action">
                      <div class="action-toggle">
                        <div class="dropdown">
                          <a data-toggle="dropdown">
                            <i class="fa fa-ellipsis-h"></i>
                          </a>
                          <!-- 点击后显示 -->
                          <div class="dropdown-menu dropdown-menu-right">
                            <!-- <a class="dropdown-item">详细信息</a> -->
                            <!-- <a
                              href="#"
                              data-navigation-target="contact-information"
                              class="dropdown-item"
                              >Profile</a
                            > -->
                            <!-- <div class="dropdown-divider"></div> -->
                            <a
                              class="dropdown-item text-danger"
                              @click.prevent="
                                clickDeleteFriend(item.uId, item.nickname)
                              "
                              >删除好友</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- ./ Friends sidebar -->

          <!-- applyMessage sidebar -->
          <div
            id="applyMessage"
            :class="{ sidebar: true, active: activeSidebar == 'applyMessage' }"
          >
            <header>
              <span>申请消息</span>
              <ul class="list-inline">
                <!--  d-xl-none:隐藏li -->
                <li class="list-inline-item d-inline">
                  <a
                    @click="sideNavClick('')"
                    class="btn btn-outline-light text-danger sidebar-close"
                  >
                    <i class="fa fa-times"></i>
                  </a>
                </li>
              </ul>
            </header>
            <!-- <form>
              <input
                type="text"
                class="form-control"
                placeholder="applyMessage"
              />
            </form> -->
            <div ref="applyMessageItems" class="sidebar-body">
              <ul class="list-group list-group-flush users-list">
                <!-- <el-card shadow="always"> -->
                <li
                  data-toggle="modal"
                  data-target="#applyDetailMessageModel"
                  @click="ApplyMessage(item, index)"
                  v-for="(item, index) in applyMessages"
                  :key="index"
                  class="list-group-item"
                >
                  <div class="users-list-body">
                    <div>
                      <h5>{{ item.type == 0 ? "加群申请" : "好友申请" }}</h5>
                      <p>发送者: {{ item.senderName }}</p>
                    </div>
                  </div>
                </li>
                <!-- </el-card> -->
              </ul>
            </div>
          </div>
          <!-- ./ applyMessage sidebar -->

          <!-- music sidebar -->
          <div
            id="favorites"
            :class="{ sidebar: true, active: activeSidebar == 'music' }"
          >
            <header>
              <span>点歌列表</span>
              <ul class="list-inline">
                <li class="list-inline-item d-inline">
                  <a
                    @click="sideNavClick('')"
                    class="btn btn-outline-light text-danger sidebar-close"
                  >
                    <i class="fa fa-times"></i>
                  </a>
                </li>
              </ul>
            </header>
            <form @submit.prevent="searchMusic">
              <input
                ref="searchInput"
                type="text"
                class="form-control"
                placeholder="Search music"
              />
            </form>
            <div ref="musicItems" class="sidebar-body">
              <ul class="list-group list-group-flush users-list">
                <li
                  v-for="(value, key, index) in songsList"
                  :key="index"
                  class="list-group-item"
                >
                  <div class="users-list-body">
                    <div>
                      <h5>{{ value.name }}</h5>
                      <p>{{ value.artists }}--{{ value.albumName }}</p>
                    </div>
                    <div class="users-list-action">
                      <div class="action-toggle">
                        <div class="dropdown">
                          <a data-toggle="dropdown">
                            <i class="fa fa-ellipsis-h"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a
                              @click.prevent="orderSong(value)"
                              class="dropdown-item"
                              >点歌</a
                            >
                            <!-- <a href="#" class="dropdown-item"
                              >Remove favorites</a
                            > -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- ./ music sidebar -->
        </div>
        <!-- ./ sidebar group -->

        <!-- chat -->
        <!-- 聊天窗口头部 -->
        <div class="chat">
          <div class="chat-header">
            <div class="chat-header-user">
              <figure v-if="currentChat.face" class="avatar">
                <img
                  src="../assets/media/img/face.jpg"
                  class="rounded-circle"
                  alt="image"
                />
              </figure>
              <figure v-if="currentChat.face == ''" class="avatar">
                <img
                  src="../assets/media/img/face.jpg"
                  class="rounded-circle"
                  alt="image"
                />
              </figure>
              <h5 v-if="!currentChat.name">请选择聊天室或好友</h5>
              <div>
                <!-- 好友或聊天室名称 -->
                <h5>{{ currentChat.name }}</h5>
                <small class="text-success">
                  <!-- 对方输入状态 -->
                  <i>{{ currentChat.motto }}</i>
                </small>
              </div>
            </div>

            <div class="chat-header-state">
              <span v-if="currentChat.title" class="label label-info">{{currentChat.title}}</span>
            </div>

            <div class="chat-header-action">
              <ul class="list-inline">
                <!-- 列表 -->
                <li class="list-inline-item d-xl-none d-inline">
                  <a class="btn btn-outline-light mobile-navigation-button">
                    <i class="fa fa-align-justify"></i>
                  </a>
                </li>

                <!-- 更多 -->
                <li v-if="currentChat.id" class="list-inline-item" style>
                  <a
                    title="更多"
                    class="btn btn-outline-light"
                    data-toggle="dropdown"
                  >
                    <i class="fa fa-ellipsis-h"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a
                      data-navigation-target="contact-information"
                      class="dropdown-item"
                      @click="rightSidebarNavClick('information')"
                      >详细信息</a
                    >
                    <!-- <a href="#" class="dropdown-item">Add to archive</a>
                    <a href="#" class="dropdown-item">Delete</a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item text-danger">Block</a> -->
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- 聊天窗口 -->
          <div ref="chatBody" class="chat-body">
            <!-- .no-message -->
            <!--
                <div class="no-message-container">
                    <div class="row mb-5">
                        <div class="col-md-4 offset-4">
                            <img src="../assets/media/svg/undraw_empty_xct9.svg" class="img-fluid" alt="image">
                        </div>
                    </div>
                    <p class="lead">Select a chat to read messages</p>
                </div>
                -->

            <!-- 消息 -->
            <div ref="messages" class="messages">
              <template
                v-for="(chatMessage, index) in currentType == '1'
                  ? roomMessages[currentChat.id]
                  : friendMessages[currentChat.id]"
                :key="index"
              >
                <div
                  v-if="chatMessage.msgType == 'msg_own'"
                  class="message-item outgoing-message"
                >
                  <div class="message-avatar">
                    <!-- 头像 -->
                    <figure class="avatar">
                      <img
                        src="../assets/media/img/face.jpg"
                        class="rounded-circle"
                        alt="image"
                      />
                    </figure>
                    <div>
                      <!-- 名字 -->
                      <h5>{{ chatMessage.senderName }}</h5>
                      <!-- 时间 -->
                      <div class="time">
                        {{ chatMessage.sendTime }}
                        <i class="ti-double-check text-info"></i>
                      </div>
                    </div>
                  </div>
                  <!-- 消息内容 -->
                  <div class="message-content">{{ chatMessage.content }}</div>
                </div>

                <div
                  v-else-if="chatMessage.msgType == 'msg_you'"
                  class="message-item"
                >
                  <div class="message-avatar">
                    <figure class="avatar">
                      <img
                        src="../assets/media/img/face.jpg"
                        class="rounded-circle"
                        alt="image"
                      />
                    </figure>
                    <div>
                      <h5>{{ chatMessage.senderName }}</h5>
                      <div class="time">{{ chatMessage.sendTime }}</div>
                    </div>
                  </div>
                  <div class="message-content">{{ chatMessage.content }}</div>
                </div>

                <!-- 标记时间 -->
                <!--  sticky-top：粘贴顶部 -->
                <div
                  v-else-if="chatMessage.msgType == 'tip'"
                  class="message-item messages-divider"
                  :data-label="chatMessage.content"
                ></div>
              </template>
            </div>
          </div>

          <div class="chat-footer">
            <form
              v-if="currentChat.name"
              @submit.prevent="submitMessage($event)"
            >
              <!-- 表情 -->
              <div>
                <button
                  class="btn btn-light mr-3"
                  data-toggle="tooltip"
                  title="Emoji"
                  type="button"
                >
                  <i class="fa fa-smile-o"></i>
                </button>
              </div>
              <!-- 消息输入框 -->
              <input
                ref="msgInput"
                type="text"
                class="form-control"
                placeholder="Write a message."
              />
              <!--  -->
              <div class="form-buttons">
                <!-- 发送文件 -->
                <button
                  class="btn btn-light"
                  data-toggle="tooltip"
                  title="Add files"
                  type="button"
                >
                  <i class="fa fa-file-o"></i>
                </button>
                <!-- 发送音频（移动端显示） -->
                <button
                  class="btn btn-light d-sm-none d-block"
                  data-toggle="tooltip"
                  title="录音"
                  type="button"
                >
                  <i class="fa fa-microphone"></i>
                </button>
                <!-- 发送消息 -->
                <button class="btn btn-primary" type="submit" title="发送消息">
                  <i class="fa fa-paper-plane-o"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- ./ chat -->

        <!-- 点击更多后的弹出框，显示聊天室信息 -->
        <div v-show="currentType == '1'" class="sidebar-group">
          <div
            id="contact-information"
            :class="{ sidebar: true, active: rightSidebar == 'information' }"
          >
            <header>
              <span>聊天室信息</span>
              <ul class="list-inline">
                <!-- 关闭 -->
                <li class="list-inline-item">
                  <a
                    class="btn btn-outline-light text-danger sidebar-close"
                    @click="rightSidebarNavClick('')"
                  >
                    <i class="fa fa-times"></i>
                  </a>
                </li>
              </ul>
            </header>

            <div ref="roomInfoItems" class="sidebar-body">
              <div class="pl-4 pr-4">
                <div class="text-center">
                  <!-- 头像 -->
                  <figure class="avatar avatar-xl mb-4">
                    <img
                      src="../assets/media/img/face.jpg"
                      class="rounded-circle"
                      alt="image"
                    />
                  </figure>

                  <!-- 名字 -->
                  <h5 class="mb-1">{{ currentChat.name }}</h5>
                  <!-- 信息 -->
                  <small class="text-muted font-italic">{{
                    currentChat.id
                  }}</small>

                  <ul
                    class="nav nav-tabs justify-content-center mt-5"
                    id="myTab"
                    role="tablist"
                  >
                    <!-- 导航 -->
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="info-tab"
                        data-toggle="tab"
                        href="#info"
                        role="tab"
                        aria-controls="info"
                        aria-selected="true"
                        >信息</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="member-tab"
                        data-toggle="tab"
                        href="#member"
                        role="tab"
                        aria-controls="member"
                        aria-selected="false"
                        >成员</a
                      >
                    </li>
                  </ul>
                </div>

                <div class="tab-content">
                  <div
                    class="tab-pane fade show active"
                    id="info"
                    role="tabpanel"
                    aria-labelledby="info-tab"
                  >
                    <div class="mt-4 mb-4">
                      <h6>创建者id</h6>
                      <p class="text-muted">{{ currentChat.uid }}</p>
                    </div>
                    <div class="mt-4 mb-4">
                      <h6>创建时间</h6>
                      <p class="text-muted">{{ currentChat.createTime }}</p>
                    </div>
                    <div class="mt-4 mb-4">
                      <h6>描述</h6>
                      <p class="text-muted">{{ currentChat.motto }}</p>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="member"
                    role="tabpanel"
                    aria-labelledby="member-tab"
                  >
                    <h6
                      class="mb-3 d-flex align-items-center justify-content-between"
                    >
                      <span>在线成员</span>
                      <!-- <a href="#" class="btn btn-link small">
                        <i data-feather="upload" class="mr-2"></i> Upload
                      </a> -->
                    </h6>

                    <div>
                      <ul class="list-group list-group-flush">
                        <li
                          class="list-group-item pl-0 pr-0 d-flex align-items-center"
                        >
                          <a>
                            <i class="fa fa-vcard-o"></i>
                            成员名
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 点击更多后的弹出框，显示好友信息 -->
        <div v-show="currentType == '0'" class="sidebar-group">
          <div
            id="contact-information"
            :class="{ sidebar: true, active: rightSidebar == 'information' }"
          >
            <header>
              <span>个人信息</span>
              <ul class="list-inline">
                <!-- 关闭 -->
                <li class="list-inline-item">
                  <a
                    class="btn btn-outline-light text-danger sidebar-close"
                    @click="rightSidebarNavClick('')"
                  >
                    <i class="fa fa-times"></i>
                  </a>
                </li>
              </ul>
            </header>

            <div ref="userInfoItems" class="sidebar-body">
              <div class="pl-4 pr-4">
                <div class="text-center">
                  <!-- 头像 -->
                  <figure class="avatar avatar-xl mb-4">
                    <img
                      src="../assets/media/img/face.jpg"
                      class="rounded-circle"
                      alt="image"
                    />
                  </figure>
                  <!-- 名字 -->
                  <h5 class="mb-1">{{ currentChat.name }}</h5>
                  <!-- 信息 -->
                  <small class="text-muted font-italic">{{
                    currentChat.id
                  }}</small>

                  <ul
                    class="nav nav-tabs justify-content-center mt-5"
                    id="myTab"
                    role="tablist"
                  >
                    <!-- 导航 -->
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="acc-tab"
                        data-toggle="tab"
                        href="#acc"
                        role="tab"
                        aria-controls="acc"
                        aria-selected="true"
                        >账号</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="pri-tab"
                        data-toggle="tab"
                        href="#pri"
                        role="tab"
                        aria-controls="pri"
                        aria-selected="false"
                        >个人</a
                      >
                    </li>
                  </ul>
                </div>

                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="acc"
                    role="tabpanel"
                    aria-labelledby="acc-tab"
                  >
                    <p class="text-muted">账号信息</p>
                    <div class="mt-4 mb-4">
                      <h6>用户名</h6>
                      <p class="text-muted">{{ currentChat.username }}</p>
                    </div>
                    <div class="mt-4 mb-4">
                      <h6>账号状态</h6>
                      <p class="text-muted">
                        {{ currentChat.state == "0" ? "正常" : "冻结" }}
                      </p>
                    </div>
                    <div class="mt-4 mb-4">
                      <h6>注册时间</h6>
                      <p class="text-muted">{{ currentChat.regTime }}</p>
                    </div>
                    <div class="mt-4 mb-4">
                      <h6>签名</h6>
                      <p class="text-muted">{{ currentChat.motto }}</p>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pri"
                    role="tabpanel"
                    aria-labelledby="pri-tab"
                  >
                    <h6
                      class="mb-3 d-flex align-items-center justify-content-between"
                    >
                      <span>个人信息</span>
                      <a class="btn btn-link small">
                        <i data-feather="upload" class="mr-2"></i>
                      </a>
                    </h6>

                    <div>
                      <div class="mt-4 mb-4">
                        <h6>邮箱</h6>
                        <p class="text-muted">{{ currentChat.email }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ./ content -->
    </div>
    <!-- ./ layout -->
  </body>
</template>

<script>
import { ElMessage } from "element-plus";

export default {
  name: "ChatRoom",
  components: {},
  data() {
    var checkCommon = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("不能为空"));
      }
      setTimeout(() => {
        if (value.length > 20) {
          callback(new Error("最大字数为20"));
        } else {
          callback();
        }
      }, 1000);
    };

    var checkText = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("不能为空"));
      }
      setTimeout(() => {
        if (value.length > 100) {
          callback(new Error("最大字数为100"));
        } else {
          callback();
        }
      }, 1000);
    };
    return {
      //校验
      rules: {
        roomName: [{ validator: checkCommon, trigger: "blur" }],
        description: [{ validator: checkText, trigger: "blur" }],
      },
      //当前是好友(0)/聊天室(1)
      currentType: "1",
      //当前聊天(1为群聊/0为私聊)
      currentChat: {
        // id: "1",
        // name: "名字",
        // motto: "简介",
        // face: "",
        // chatType: "1", //type1为好友，0为聊天室
      },
      newRoomForm: {
        roomName: "",
        description: "",
        show: false,
        loading: false,
      },
      joinRoomForm: {
        rId: "",
        roomName: "",
        show: false,
        loading: false,
      },
      addFriendForm: {
        uId: "",
        nickname: "",
        show: false,
        loading: false,
      },
      //加入聊天室表格数据
      joinRoomTableData: [],
      addFriendTableData: [],
      //当前所处聊天室的所有用户
      userOfCurrentRoom: [],
      //左侧列表
      activeSidebar: "chats",
      //右侧信息
      rightSidebar: "",
      //聊天室数组(聊天室名, 聊天室信息, 最后消息发送时间, 头像风格, 字体风格)
      chatRooms: {},
      //好友数组(聊天室名,简介)
      friends: {},
      applyMessages: [],
      //搜索到的聊天室或好友(名字，信息)
      friendOrRoom: [{ userId: "", name: "吴晗", info: "我两天学完spring" }],
      //搜索到的歌曲(歌名，歌曲信息)
      songsList: {},
      //聊天室的播放列表（歌名，歌曲信息）
      musicList: [{}],
      //聊天信息
      //存储当前所有聊天室的聊天信息对象，key为rid，值为消息数组(消息类型（你我），发送者姓名，发送时间，发送内容),如下
      // {"1":[{msgType: "msg_own",senderName: "吴晗",sendTime: "22.22 PM",content: "你是谁",}],
      //               "2":[{msgType: "msg_own",senderName: "吴晗",sendTime: "22.22 PM",content: "你是谁",}],
      // }
      //tip,msg_own,msg_you
      roomMessages: {},
      //存储当前所有私聊的聊天信息
      friendMessages: {},
      currentDetailMessage: {},
    };
  },
  computed: {},
  methods: {
    //接受申请
    acceptApply(currentDetailMessage) {
      currentDetailMessage["acceptLoading"] = true;
      this.$axios({
        url: process.env.VUE_APP_BASEURL + "apply/acceptApply",
        method: "post",
        data: {
          aid: currentDetailMessage.aid,
          targetId: currentDetailMessage.targetId,
          senderId: currentDetailMessage.senderId,
          typr: currentDetailMessage.type,
          content: currentDetailMessage.content,
          senderName: currentDetailMessage.senderName,
          type: currentDetailMessage.type,
        },
      })
        .then((response) => {
          if (response.data.code == 2000) {
            ElMessage.success(response.data.message);
            // //关闭连接
            // this.websocket.close();
            // //重新初始化
            // this.initWebsocket()
            // // this.jQuery('#applyDetailMessageModel').modal('hide')
            // this.initFriend();
            // this.initRooms();
            // this.initApplyMessage();

            this.$router.go(0);
          } else {
            this.jQuery("#applyDetailMessageModel").modal("hide");
            ElMessage.error("操作失败");
          }
        })
        .catch(() => {
          this.jQuery("#applyDetailMessageModel").modal("hide");
          ElMessage.error("操作失败");
        });
    },
    //拒绝申请
    rejectApply(currentDetailMessage) {
      currentDetailMessage["rejectLoading"] = true;
      this.$axios({
        url: process.env.VUE_APP_BASEURL + "apply/rejectApply",
        method: "post",
        data: {
          aid: currentDetailMessage.aid,
          targetId: currentDetailMessage.targetId,
          senderId: currentDetailMessage.senderId,
          typr: currentDetailMessage.type,
          content: currentDetailMessage.content,
          senderName: currentDetailMessage.senderName,
          type: currentDetailMessage.type,
        },
      })
        .then((response) => {
          if (response.data.code == 2000) {
            ElMessage.success(response.data.message);
            // this.jQuery('#applyDetailMessageModel').modal('hide')
            this.$router.go(0);
            // //关闭连接
            // this.websocket.close();
            // //重新初始化
            // this.initWebsocket()

            // this.initApplyMessage();
          } else {
            this.jQuery("#applyDetailMessageModel").modal("hide");
            ElMessage.error("操作失败");
          }
        })
        .catch(() => {
          this.jQuery("#applyDetailMessageModel").modal("hide");
          ElMessage.error("操作失败");
        });
    },
    //点击处理申请
    ApplyMessage(item, index) {
      console.log(item, index);
      item["acceptLoading"] = false;
      item["rejectLoading"] = false;
      this.currentDetailMessage = item;
    },
    //判断按钮是否禁用并显示已加入
    searchRoomsButton(rId) {
      for (var item in this.chatRooms) {
        if (item.rid == rId) {
          alert("返回true：" + rId);
          return true;
        }
      }
      return false;
    },
    //查询用户
    searcUser() {
      this.addFriendForm.loading = true;
      var nickname = "-" + this.addFriendForm.nickname;
      var uId = "-" + this.addFriendForm.uId;
      this.$axios({
        url:
          process.env.VUE_APP_BASEURL +
          "user/getUserByIdOrName/" +
          nickname +
          "/" +
          uId,
        method: "get",
      })
        .then((response) => {
          if (response.data.code == 2000) {
            ElMessage.success({
              message: response.data.message,
              type: "success",
            });
            var users1 = response.data.data.users;
            //遍历查询到的room
            for (var i = 0; i < users1.length; i++) {
              if (users1[i]["uId"] == this.$store.getters.getLoginInfo.uId) {
                users1[i]["disabled"] = true;
                users1[i]["stateTip"] = "这是你";
                continue;
              }
              users1[i]["disabled"] = false;
              users1[i]["stateTip"] = "好友申请";
              //遍历当前的friends
              for (var j = 0; j < this.friends.length; j++) {
                //如果当前好友id与查到的相等则设为true
                if (this.friends[j].uId == users1[i].uId) {
                  users1[i]["disabled"] = true;
                  users1[i]["stateTip"] = "已添加";
                }
              }
            }
            this.addFriendTableData = users1;
          } else {
            ElMessage.error("查询失败，请稍后再试");
          }
          this.addFriendForm.loading = false;
        })
        .catch((e) => {
          // this.newRoomForm.roomName=""
          //   this.newRoomForm.description=""
          console.log(e);
          ElMessage.error("查询失败，请稍后再试");
          this.addFriendForm.loading = false;
        });
    },
    //查询聊天室
    searchRoom() {
      // this.joinRoomForm.rId
      this.joinRoomForm.loading = true;
      var roomName = "-" + this.joinRoomForm.roomName;
      var rId = "-" + this.joinRoomForm.rId;
      this.$axios({
        url:
          process.env.VUE_APP_BASEURL +
          "chatroom/getRoomsByIdOrName/" +
          roomName +
          "/" +
          rId,
        method: "get",
      })
        .then((response) => {
          if (response.data.code == 2000) {
            ElMessage.success({
              message: response.data.message,
              type: "success",
            });
            var chatrooms1 = response.data.data.chatrooms;
            // alert(chatrooms1[1]['rid'])
            //遍历查询到的room
            for (var i = 0; i < chatrooms1.length; i++) {
              chatrooms1[i]["disabled"] = false;
              chatrooms1[i]["stateTip"] = "申请加入";
              //遍历当前的room
              for (var j = 0; j < this.chatRooms.length; j++) {
                //如果当前roomid与查到的相等则设为true
                if (this.chatRooms[j].rid == chatrooms1[i].rid) {
                  chatrooms1[i]["disabled"] = true;
                  chatrooms1[i]["stateTip"] = "已加入";
                }
              }
            }
            this.joinRoomTableData = chatrooms1;
          } else {
            ElMessage.error("查询失败，请稍后再试");
          }
          this.joinRoomForm.loading = false;
        })
        .catch((e) => {
          // this.newRoomForm.roomName=""
          //   this.newRoomForm.description=""
          console.log(e);
          ElMessage.error("查询失败，请稍后再试");
          this.joinRoomForm.loading = false;
        });
    },
    clickJoinRoom(row) {
      row["disabled"] = true;
      row["stateTip"] = "已申请";
      this.$prompt("请输入申请信息", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^.{0,100}$/,
        inputErrorMessage: "文本过长",
        inputValue: "",
      })
        .then(({ value }) => {
          this.$axios({
            url: process.env.VUE_APP_BASEURL + "apply/applyRoomOrUser",
            method: "post",
            data: {
              senderId: this.$store.getters.getLoginInfo.uId,
              targetId: row.rid,
              content: value,
              senderName: this.$store.getters.getLoginInfo.nickname,
              type: 0,
            },
          })
            .then((response) => {
              if (response.data.code == 2000) {
                ElMessage.success(response.data.message);
              } else {
                ElMessage.error(response.data.message);
                row["disabled"] = false;
                row["stateTip"] = "重新申请";
              }
            })
            .catch(() => {
              row["disabled"] = false;
              row["stateTip"] = "重新申请";
              ElMessage.error("申请失败，请稍后再试");
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消申请",
          });
          row["disabled"] = false;
          row["stateTip"] = "申请加入";
        });
    },
    clickAddFriend(row) {
      row["disabled"] = true;
      row["stateTip"] = "已申请";
      this.$prompt("请输入申请信息", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^.{0,100}$/,
        inputErrorMessage: "文本过长",
        inputValue: "",
      })
        .then(({ value }) => {
          this.$axios({
            url: process.env.VUE_APP_BASEURL + "apply/applyRoomOrUser",
            method: "post",
            data: {
              senderId: this.$store.getters.getLoginInfo.uId,
              targetId: row.uId,
              content: value,
              senderName: this.$store.getters.getLoginInfo.nickname,
              type: 1, //申请好友
            },
          })
            .then((response) => {
              if (response.data.code == 2000) {
                ElMessage.success(response.data.message);
              } else {
                ElMessage.error(response.data.message);
                row["disabled"] = false;
                row["stateTip"] = "重新申请";
              }
            })
            .catch(() => {
              row["disabled"] = false;
              row["stateTip"] = "重新申请";
              ElMessage.error("申请失败，请稍后再试");
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消申请",
          });
          row["disabled"] = false;
          row["stateTip"] = "申请加入";
        });
    },
    //查询歌曲
    searchMusic() {
      var search = this.$refs.searchInput;
      var keywords = search.value.trim();
      if (keywords != "") {
        this.$axios
          .get("/api/search?keywords=" + encodeURI(keywords), {
            headers: {
              withCredentials: true,
            },
          })
          .then((response) => {
            if (response.data.code == 200) {
              // console.log("关键词搜索成功，音乐列表如下：")
              var songs = response.data.result.songs;
              this.songsList = {};
              //拼接歌手

              var artists = "";
              for (i = 0; i < songs[0].artists.length; i++) {
                artists = artists + " " + songs[0].artists[i].name;
              }
              this.songsList[0] = {
                id: songs[0].id,
                name: songs[0].name,
                url: "",
                albumName: songs[0].album.name,
                artists,
              };
              artists = "";
              //歌曲id列表
              var songsId = songs[0].id;
              //映射表 歌曲id-songsList存储位置
              var idMap = {};
              idMap[songs[0].id] = 0;

              for (var i = 1; i < songs.length; i++) {
                for (var j = 0; j < songs[i].artists.length; j++) {
                  artists = artists + " " + songs[i].artists[j].name;
                }
                //歌曲（歌曲id，歌曲名字，地址）
                this.songsList[i] = {
                  id: songs[i].id,
                  name: songs[i].name,
                  url: "",
                  albumName: songs[i].album.name,
                  artists,
                };
                artists = "";
                idMap[songs[i].id] = i;
                //专辑和歌曲id
                songsId = songsId + "," + songs[i].id;
              }

              //根据获取的id列表操作
              this.$axios
                .get("/api/song/url?id=" + songsId, {
                  headers: {
                    withCredentials: true,
                  },
                })
                .then((response) => {
                  //歌曲详情
                  var songsUrl = response.data.data;
                  for (var i = 0; i < songsUrl.length; i++) {
                    var index = idMap[songsUrl[i].id]; //获取存储位置
                    this.songsList[index].url = songsUrl[i].url;
                  }
                  this.flushScroll(this.$refs.musicItems, false);
                  // alert(this.songsList['0'].id);
                  // alert(this.songsList['0'].name)
                  // this.flushScroll(this.$refs.chatRoomItems);
                })
                .catch((e) => {
                  console.log(e);
                });
            } else {
              console.log("关键词搜索失败");
            }
          })
          .catch((e) => {
            console.log(e);
          });
        //清除输入框数据
        this.$refs.searchInput.value = "";
        // this.flushScroll(this.$refs.musicItems,false);
      } else {
        //重新聚焦
        this.$notify({
          title: "警告",
          message: "请输入内容",
          type: "warning",
          duration: 1000,
        });

        this.$refs.searchInput.focus();
      }
    },
    //点击举报聊天室
    clickReportRoom(rId, roomName) {
      console.log(rId);
      this.$confirm("是否举报聊天室(" + roomName + ")?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "举报成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消举报",
          });
        });
    },
    //点击删除聊天室
    clickDeleteRoom(rId, roomName) {
      this.$confirm("是否删除聊天室( " + roomName + " )?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios
            .get(
              process.env.VUE_APP_BASEURL + "chatroom/deleteRoomsById/" + rId
            )
            .then((response) => {
              if (response.data.code == 2000) {
                this.$message({
                  type: "success",
                  message: "删除成功!",
                });
                this.$router.go(0);
                //关闭连接
                // this.websocket.close();
                // //重新初始化
                // this.initWebsocket();
                // this.initRooms();
              } else {
                this.$message({
                  type: "error",
                  message: "删除失败",
                });
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消删除",
          });
        });
    },
    //点击删除好友
    clickDeleteFriend(uId, nickname) {
      this.$confirm("是否删除好友( " + nickname + " )?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios
            .get(
              process.env.VUE_APP_BASEURL +
                "friends/deleteFriend/" +
                uId +
                "/" +
                this.$store.getters.getLoginInfo.uId
            )
            .then((response) => {
              if (response.data.code == 2000) {
                this.$message({
                  type: "success",
                  message: response.data.message,
                });
                this.$router.go(0);
                //关闭连接
                // this.websocket.close();
                //重新初始化
                // this.initWebsocket();
                // this.initFriend();
              } else {
                this.$message({
                  type: "error",
                  message: response.data.message,
                });
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消删除",
          });
        });
    },
    //点击退出聊天室
    clickOutRoom(rId, roomName) {
      this.$confirm("是否退出聊天室( " + roomName + " )?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios
            .get(
              process.env.VUE_APP_BASEURL +
                "chatroom/outRoomsById/" +
                rId +
                "/" +
                this.$store.getters.getLoginInfo.uId
            )
            .then((response) => {
              if (response.data.code == 2000) {
                this.$message({
                  type: "success",
                  message: "退出成功!",
                });
                //关闭连接
                // this.websocket.close();
                // //重新初始化
                // this.initWebsocket();
                this.$router.go(0);
                // this.initRooms();
              } else {
                this.$message({
                  type: "error",
                  message: "退出失败",
                });
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消退出",
          });
        });
    },
    //点击好友item
    clickFriendItem(item) {
      if (typeof item.motto == "undefined") {
        item.motto = "无";
      }

      this.currentType = "0";

      this.$axios
        .get(
          process.env.VUE_APP_BASEURL +
            "chatMessage/getHistoryByUser/" +this.currentType+"/"+item.uId+"/"+
            this.$store.getters.getLoginInfo.uId
        )
        .then((response) => {
          if (response.data.code == 2000) {
            debugger
            var msgs = response.data.data.chatMessages
            if(msgs[0]){
              //清空该聊天室消息
              this.friendMessages[msgs[0].targetId==this.$store.getters.getLoginInfo.uId?msgs[0].senderId:msgs[0].targetId] = [];

              for(var index in msgs){
                
                this.friendMessages[msgs[0].targetId==this.$store.getters.getLoginInfo.uId?msgs[0].senderId:msgs[0].targetId].push({
                  msgType:
                    msgs[index].senderId == this.$store.getters.getLoginInfo.uId
                      ? "msg_own"
                      : "msg_you",
                  senderName: msgs[index].senderName,
                  sendTime: msgs[index].sendTime,
                  content: msgs[index].content,
                });
              }
              
            }
          } else {
            ElMessage.error("消息记录获取失败")
          }
        });


      
      this.currentChat = {
        id: item.uId,
        name: item.nickname,
        motto: item.motto,
        chatType: "0",
        uId: item.uId,
        username: item.username,
        state: item.state,
        email: item.email,
        regTime: item.regTime,
      };
      this.flushScroll(this.$refs.userInfoItems, false);

    },
    //点击聊天室item
    clickChatRoomItem(item) {
      //类型改为聊天室
      this.currentType = "1";
      //获取聊天记录
      this.$axios
        .get(
          process.env.VUE_APP_BASEURL +
            "chatMessage/getHistoryByUser/" +this.currentType+"/"+item.rid+"/"+
            this.$store.getters.getLoginInfo.uId
        )
        .then((response) => {
          if (response.data.code == 2000) {
            debugger
            var msgs = response.data.data.chatMessages
            if(msgs[0]){
              //清空该聊天室消息
              this.roomMessages[msgs[0].targetId] = [];
              for(var index in msgs){
                this.roomMessages[msgs[0].targetId].push({
                  msgType:
                    msgs[index].senderId == this.$store.getters.getLoginInfo.uId
                      ? "msg_own"
                      : "msg_you",
                  senderName: msgs[index].senderName,
                  sendTime: msgs[index].sendTime,
                  content: msgs[index].content,
                });
              }
            }
          } else {
            ElMessage.error("失败")
          }
        });

      //设置当前聊天信息
      this.currentChat = {
        id: item.rid,
        name: item.roomName,
        motto: item.motto,
        chatType: "1",
        createTime: item.createTime,
        lastMsgTime: item.lastMsgTime,
        uid: item.uid,
        title: '在线人数：'+item.onlineCount
      };
      this.flushScroll(this.$refs.roomInfoItems, false);
    },
    clickNewRoom(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.newRoomForm.loading = true;
          this.$axios({
            url: process.env.VUE_APP_BASEURL + "chatroom/newRoom",
            method: "post",
            data: {
              //提交的数据
              roomName: this.newRoomForm.roomName,
              uid: this.$store.getters.getLoginInfo.uId,
              motto: this.newRoomForm.description,
            },
          })
            .then((response) => {
              if (response.data.code == 2000) {
                this.$notify({
                  title: "成功",
                  message: response.data.message,
                  type: "success",
                  duration: 1000,
                });
                //刷新页面
                // this.$router.go(0);
                //关闭连接
                this.websocket.close();
                //重新初始化
                this.initWebsocket();
                this.$refs[formName].resetFields();
                this.initRooms();
              } else {
                this.$notify.error({
                  title: "错误",
                  message: response.data.message,
                  duration: 1000,
                });
              }
              this.newRoomForm.loading = false;
            })
            .catch(() => {
              // this.newRoomForm.roomName=""
              //   this.newRoomForm.description=""
              this.$notify.error({
                title: "错误",
                message: "聊天室创建失败",
                duration: 1000,
              });
              this.newRoomForm.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    clickmodelClose(formName) {
      this.$refs[formName].resetFields();
    },
    //点击监听：左侧列表显示
    sideNavClick(sidebar) {
      this.activeSidebar = sidebar;
    },
    //点击监听：右侧信息显示
    rightSidebarNavClick(sidebar) {
      this.rightSidebar = sidebar;
    },
    //提交事件：发送信息事件
    submitMessage() {
      var input = this.$refs.msgInput;
      var msg = input.value.trim();
      if (msg) {
        //首先向服务器发送消息
        var msgJson = {
          type: this.currentChat.chatType,
          content: msg,
          senderName: this.$store.getters.getLoginInfo.nickname,
          senderId: this.$store.getters.getLoginInfo.uId,
          targetId: this.currentChat.id,
        };
        this.websocket.send(JSON.stringify(msgJson));
        this.$axios({
        url: process.env.VUE_APP_BASEURL + "chatMessage/saveMessage",
        method: "post",
        data: {
          content:msg,
          type:this.currentChat.chatType,
          senderId:this.$store.getters.getLoginInfo.uId,
          targetId:this.currentChat.id,
          senderName:this.$store.getters.getLoginInfo.nickname,
        },
      })
        .then((response) => {
          if (response.data.code != 2000) {
            ElMessage.error("操作失败");
          }
        })
        .catch(() => {
          ElMessage.error("操作失败");
        });
        this.$refs.msgInput.value = "";
      } else {
        //没消息，重新聚焦到input
        this.$refs.msgInput.focus();
      }
    },
    //点歌
    orderSong(value) {
      alert(value.url);
      // alert(value.name);
      // alert(value.artists);
      // alert(value.albumName);
      console.log(value);
    },

    //（刷新延迟）
    flushScroll(ele, bottom = true, time = 200) {
      var element = this.jQuery(ele);
      if (bottom) {
        //bottom为true，表示需要刷新到最底层
        setTimeout(function () {
          element
            .scrollTop(element.get(0).scrollHeight, -1)
            .niceScroll({
              cursorcolor: "rgba(66, 66, 66, 0.20)",
              cursorwidth: "10px",
              cursorborder: "1px solid #fff",
              autohidemode: true,
            })
            .resize();
        }, time);
      } else {
        setTimeout(function () {
          element
            .niceScroll({
              cursorcolor: "rgba(66, 66, 66, 0.20)",
              cursorwidth: "10px",
              cursorborder: "1px solid #fff",
              autohidemode: true,
            })
            .resize();
        }, time);
      }
    },
    websocketOnMessage(event) {
      // alert("收到服务端传来的消息："+event.data);
      //有消息，发送消息
      var msg = JSON.parse(event.data);
      // alert(event.data);

      if (msg.msgType == "1") {
        //普通信息
        if (msg.type == "0") {
          //0存到好友消息里
          // alert("好友消息");
          // alert(event.data);
          if (msg.sendSuccess == "0") {
            //发送失败
            this.currentChat.title = "不在线"
            if (typeof this.friendMessages[msg.uId] == "undefined") {
              this.friendMessages[msg.uId] = [];
            }
            this.friendMessages[msg.uId].push({
              msgType:
                msg.senderId == this.$store.getters.getLoginInfo.uId
                  ? "msg_own"
                  : "msg_you",
              senderName: msg.senderName,
              sendTime: msg.sendTime,
              content: msg.content,
            });

          } else {
            //消息发送成功
            if (typeof this.friendMessages[msg.uId] == "undefined") {
              this.friendMessages[msg.uId] = [];
            }
            this.friendMessages[msg.uId].push({
              msgType:
                msg.senderId == this.$store.getters.getLoginInfo.uId
                  ? "msg_own"
                  : "msg_you",
              senderName: msg.senderName,
              sendTime: msg.sendTime,
              content: msg.content,
            });
          }
        } else if (msg.type == "1") {
          //1存到聊天室消息里
          if (typeof this.roomMessages[msg.rId] == "undefined") {
            this.roomMessages[msg.rId] = [];
          }
          this.roomMessages[msg.rId].push({
            msgType:
              msg.senderId == this.$store.getters.getLoginInfo.uId
                ? "msg_own"
                : "msg_you",
            senderName: msg.senderName,
            sendTime: msg.sendTime,
            content: msg.content,
          });
          // alert(this.friendMessages);
        }
      } else if (msg.msgType == "0") {
        //消息提示
        if (msg.type == "0") {
          //0存到好友消息里
          if (typeof this.friendMessages[msg.uId] == "undefined") {
            this.friendMessages[msg.uId] = [];
          }
          this.friendMessages[msg.uId].push({
            msgType: "tip",
            content: msg.content,
          });
        } else if (msg.type == "1") {
          // alert(event.data)
          //1存到聊天室消息里
          if (typeof this.roomMessages[msg.rId] == "undefined") {
            this.roomMessages[msg.rId] = [];
          }
          this.roomMessages[msg.rId].push({
            msgType: "tip",
            content: msg.content,
          });
        }
      } else if (msg.msgType == "2"){
        if(msg.type=='1'){
          //初始化聊天室头部：在线人数：?
          this.chatRooms[msg.rId]['onlineCount'] = msg.onlineCount;
          if(this.currentChat.chatType=='1'&&this.currentChat.id==msg.rId){//消息是当前打开的聊天室的
            this.currentChat.title = '在线人数：'+msg.onlineCount
          }
        }
      }
      this.flushScroll(this.$refs.chatBody);
    },
    initApplyMessage() {
      //获取申请列表
      this.$axios
        .get(
          process.env.VUE_APP_BASEURL +
            "apply/getMyApply/" +
            this.$store.getters.getLoginInfo.uId
        )
        .then((response) => {
          if (response.data.code == 2000) {
            //申请消息获取成功
            var applyMessages1 = response.data.data.applyMessages;
            for (var i = 0; i < applyMessages1.length; i++) {
              if (applyMessages1[i].type == 0) {
                //聊天室赋名字
                for (var i1 = 0; i < this.chatRooms.length; i1++) {
                  if (this.chatRooms[i1].rid == applyMessages1[i].targetId) {
                    applyMessages1[i]["targetName"] = this.chatRooms[
                      i1
                    ].roomName;
                    break;
                  }
                }
              } else {
                //目标名字就是自己
                applyMessages1[i][
                  "targetName"
                ] = this.$store.getters.getLoginInfo.nickname;
              }
            }
            this.applyMessages = applyMessages1;
          } else {
            this.$notify.error({
              title: "错误",
              message: "聊天室获取失败",
              duration: 1000,
            });
          }
        });
    },
    initFriend() {
      //获取好友列表
      this.$axios
        .get(
          process.env.VUE_APP_BASEURL +
            "user/getFriendsByUserId/" +
            this.$store.getters.getLoginInfo.uId
        )
        .then((response) => {
          console.log(this.friends);
          if (response.data.code == 2000) {
            for (var index in response.data.data.friends) {
              var friend = response.data.data.friends[index];
              this.friends[friend.uId] = friend;
            }
          } else {
            this.$notify.error({
              title: "错误",
              message: "好友列表获取失败",
              duration: 1000,
            });
          }
        });
    },
    initRooms() {
      //获取聊天室列表
      this.$axios
        .get(
          process.env.VUE_APP_BASEURL +
            "chatroom/getRoomsById/" +
            this.$store.getters.getLoginInfo.uId
        )
        .then((response) => {
          if (response.data.code == 2000) {
            //聊天室信息获取成功
            //发送请求到服务器将查到的所有聊天室和自己进行绑定
            var rIdArr = [];
            for (var i = 0; i < response.data.data.chatrooms.length; i++) {
              var item = response.data.data.chatrooms[i];
              rIdArr.push({ rId: item.rid });
            }
            this.websocket.send(
              JSON.stringify({ type: "2", chatRooms: rIdArr })
            );
            for (var index in response.data.data.chatrooms) {
              var chatroom = response.data.data.chatrooms[index];
              this.chatRooms[chatroom.rid] = chatroom;
              console.log(this.chatRooms[chatroom.rid]);
            }
          } else {
            this.$notify.error({
              title: "错误",
              message: "聊天室获取失败",
              duration: 1000,
            });
          }
        });
    },
    initWebsocket() {
      //初始化时通过websocket连接服务器 tode
      var websocket = null;
      //判断当前浏览器是否支持WebSocket
      if ("WebSocket" in window) {
        //连接WebSocket节点
        websocket = new WebSocket(
          process.env.VUE_APP_WSURL +
            this.$store.getters.getLoginInfo.uId +
            "/" +
            this.$store.getters.getLoginInfo.nickname
        );
      } else {
        alert("Not support websocket");
      }

      this.websocket = websocket;
      //连接发生错误的回调方法
      websocket.onerror = function () {
        alert("error");
      };

      //连接成功建立的回调方法
      websocket.onopen = function (event) {
        console.log("open" + event);
      };

      //接收到消息的回调方法
      websocket.onmessage = this.websocketOnMessage;

      //连接关闭的回调方法
      websocket.onclose = function () {};

      //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
      window.onbeforeunload = function () {
        websocket.close();
      };
    },
  },

  created() {
    this.initWebsocket();
    this.initRooms();
    this.initFriend();
    this.initApplyMessage();
  },
  mounted() {
    //美化滚动条
    this.flushScroll(this.$refs.chatBody);
    this.flushScroll(this.$refs.chatRoomItems, false);
    this.flushScroll(this.$refs.friendItems, false);
    this.flushScroll(this.$refs.applyMessageItems, false);
    this.flushScroll(this.$refs.musicItems, false);
    this.flushScroll(this.$refs.userInfoItems, false);
    this.flushScroll(this.$refs.roomInfoItems, false);
    console.log(this);
    console.log("window", window);
    console.log("document", document);
  },

  beforeUnmount() {
    //离开当前路由断开连接
    this.websocket.close();
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/chatRoom.css";
@import "//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
.layout {
  height: 90vh;

  .content {
    .sidebar-group {
      .sidebar {
        .sidebar-body {
          ul.list-group {
            overflow: visible !important;
          }
        }
      }
    }
  }
}

nav.navigation ul {
  height: 90vh;
}
</style>>