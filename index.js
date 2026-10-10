const users = [
  { id: 1, name: "Himanshi", role: "admin", active: true },
  { id: 2, name: "Rahul", role: "user", active: true },
  { id: 3, name: "Ananya", role: "user", active: false },
  { id: 4, name: "Karan", role: "user", active: true }
];

function deactivateUser(user) {
  user.active = false;
  return true;
}

function getUserSummary() {
  const activeUsers = getActiveUsers();

  return {
    totalUsers: users.length,
    activeUsers: activeUsers.length,
    inactiveUsers: users.length - activeUsers.length,
    admins: getUsersByRole("admin").length
  };
}

function searchUsers(searchTerm) {
  const term = searchTerm.toLowerCase();

  return users.filter((user) =>
    user.name.toLowerCase().includes(term)
  );
}

function canAccessDashboard(id) {
  const user = findUserById(id);

  if (!user) {
    return false;
  }

  return user.active && user.role === "admin";
}

function getActiveUserNames() {
  return getActiveUsers().map((user) => user.name);
}

// BUG: This should return the average number of users
// per role, but it is calculating the total number of users.
function getAverageUsersPerRole() {
  const roles = [...new Set(users.map((user) => user.role))];

  if (roles.length === 0) {
    return 0;
  }

  return users.length / roles.length;
}

module.exports = {
  findUserById,
  getActiveUsers,
  getUsersByRole,
  countActiveUsers,
  deactivateUser,
  getUserSummary,
  searchUsers,
  canAccessDashboard,
  getActiveUserNames,
  getAverageUsersPerRole
};
