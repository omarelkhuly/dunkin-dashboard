import { Box, Typography, Grid, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

// استيراد الصور من الأصول
import EarnPointsImg from "../assets/Earn_Points_tab.png";
import GetRewardsImg from "../assets/Get_rewards_tab.png";
import BoostedStatusImg from "../assets/Boosted_status_tab.png";
import MealDealImg from "../assets/img_Home_Desktop@2x.png";

export default function RewardsSection() {
    const navigate = useNavigate();

    return (
        <>
            {/* 🔹 Section One */}
            <Container sx={{ py: 8 }}>
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {/* Earn Points */}
                    <Grid item xs={12} sm={4}>
                        <Box textAlign="center" p={2}>
                            <img src={EarnPointsImg} alt="Earn Points" width="100" />
                            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2, mb: 1 }}>
                                EARN POINTS ANY WAY YOU PAY
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                Order ahead in the app or scan your Dunkin’ Rewards ID in-store
                                to earn 10 points per $1 spent.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: "25px",
                                    px: 3,
                                    backgroundColor: "#E11383",
                                    "&:hover": { backgroundColor: "#c40e6d" },
                                }}
                                onClick={() => navigate("/rewards")}
                            >
                                Learn More
                            </Button>
                        </Box>
                    </Grid>

                    {/* Get Rewards */}
                    <Grid item xs={12} sm={4}>
                        <Box textAlign="center" p={2}>
                            <img src={GetRewardsImg} alt="Get Rewards" width="100" />
                            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2, mb: 1 }}>
                                GET REWARDS AND OFFERS
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                Enjoy exclusive offers and redeem rewards starting at just 150
                                points — only $15 spent!
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: "25px",
                                    px: 3,
                                    backgroundColor: "#E11383",
                                    "&:hover": { backgroundColor: "#c40e6d" },
                                }}
                                onClick={() => navigate("/rewards")}
                            >
                                Learn More
                            </Button>
                        </Box>
                    </Grid>

                    {/* Boosted Status */}
                    <Grid item xs={12} sm={4}>
                        <Box textAlign="center" p={2}>
                            <img src={BoostedStatusImg} alt="Boosted Status" width="100" />
                            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2, mb: 1 }}>
                                UNLOCK MORE WITH BOOSTED STATUS
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                Earn faster when you visit 12 times in a month and start
                                receiving 12 points per $1 spent.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: "25px",
                                    px: 3,
                                    backgroundColor: "#E11383",
                                    "&:hover": { backgroundColor: "#c40e6d" },
                                }}
                                onClick={() => navigate("/rewards")}
                            >
                                Learn More
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* 🔹 Section Two */}
            <Box
                sx={{
                    py: 8,
                    px: { xs: 2, md: 8 },
                    backgroundColor: "#f9f4f2",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // موبايل تحت بعض، ديسكتوب جنب بعض
                    alignItems: "center",
                    gap: 6,
                }}
            >
                {/* النصوص */}
                <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        sx={{ color: "#E11383", mb: 2 }}
                    >
                        $6 MEAL DEAL
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                        MEDIUM COFFEE HOT OR ICED
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                        BACON, EGG & CHEESE SANDWICH
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                        HASH BROWNS
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: "25px",
                            px: 4,
                            backgroundColor: "#E11383",
                            "&:hover": { backgroundColor: "#c40e6d" },
                        }}
                        onClick={() => navigate("/menu")}
                    >
                        View Menu
                    </Button>

                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ mt: 2, display: "block" }}
                    >
                        No substitutions. Participation may vary. Limited time offer. Cannot
                        be combined with other offers. Exclusions and terms apply.
                    </Typography>
                </Box>

                {/* الصورة */}
                <Box sx={{ flex: 1, textAlign: "center" }}>
                    <img
                        src={MealDealImg}
                        alt="Meal Deal"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </Box>
            </Box>
        </>
    );
}
