export const authenticateUser = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.session.role === "admin") {
    next();
  } else {
    res.status(403).json({ error: "Forbidden" });
  }
};

export const isStudent = (req, res, next) => {
  if (req.session.role === "student") {
    next();
  } else {
    res.status(403).json({ error: "Forbidden" });
  }
};

export const isTeacher = (req, res, next) => {
  if (req.session.role === "teacher") {
    next();
  } else {
    res.status(403).json({ error: "Forbidden" });
  }
};
