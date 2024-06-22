const initialState = {
  currentUser: null,
  authLoading: true,
  authError: undefined,
  siteSettings: {
    contactInfo: {
      id: "contactInfo",
      phone: "774-476-0487",
      email: "ashleyfranklinwellness@gmail.com",
    },
    metaDetails: {
      id: "metaDetails",
      metaInfo: [
        {
          pagename: "Home",
          metaTitle: "Ashley Franklin Wellness",
          metaDescription:
            "Start your journey in women's counseling and embrace the life you desire. Ashley Franklin is dedicated to therapy for women, providing the support they deserve.",
        },
        {
          pagename: "About",
          metaTitle: "Ashley Franklin | Women's Therapist in Cape Cod",
          metaDescription:
            "Meet Ashley Franklin, a dedicated womens therapist and licensed independent clinical social worker offering women counseling on life's challenges with expertise.",
        },
        {
          pagename: "Services",
          metaTitle:
            "Online Therapy for Women | Clinical Social Work Supervision",
          metaDescription:
            "Connect with an experienced female counselor for professional online therapy, social work consultancy, and clinical supervision tailored to your needs.",
        },
        {
          pagename: "Specialties",
          metaTitle: "Health and Wellness Specialist Services",
          metaDescription:
            "Gain control and balance with health and wellness specialist services. Enjoy expert therapy for women's anxiety, panic attacks, and burnout.",
        },
        {
          pagename: "What To Expect",
          metaTitle: "Starting Therapy | Ashley Franklin Wellness",
          metaDescription:
            "Starting therapy? Learn about the process, address fears of therapy, and understand what happens in sessions designed to support and empower you.",
        },
        {
          pagename: "Blog",
          metaTitle: "Blog | Ashley Franklin Wellness",
          metaDescription:
            "Begin your journey with our women's counseling blog and discover the life you desire. Ashley Franklin shares expert insights and valuable tips on therapy for women, providing the support you deserve.",
        },
        {
          pagename: "Contact",
          metaTitle: "Contact | Ashley Franklin Wellness",
          metaDescription:
            "Reach out to discuss your therapy needs and see if we're a good match. Contact us to start your journey. Call 774-476-0487 or email today.",
        },
        {
          pagename: "FAQ",
          metaTitle: "Therapy FAQ | Ashley Franklin Wellness",
          metaDescription:
            "Browse our therapy FAQ for insights on how counseling works, from session experiences to dealing with insurance, and how therapy fosters positive change.",
        },
      ],
    },
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: payload };
    case "SET_AUTH_LOADING":
      return { ...state, authLoading: payload };
    case "SET_AUTH_ERROR":
      return { ...state, authError: payload };
    case "SET_SITE_SETTINGS":
      return { ...state, siteSettings: payload };
    default:
      return state;
  }
};

export default reducer;
