import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const AboutUs = () => {
  // ✅ Common style for all paragraphs
  const textStyle = {
    fontSize: { xs: "16px", md: "18px" },
    lineHeight: { xs: "24px", md: "27px" },
  };

  return (
    <Box sx={{ my: { xs: 2, md: 5 } }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            p: 2,
            borderRadius: "7px",
            border: "1.5px solid #e8e8e8",
            textAlign: "justify", // ✅ applied once here
          }}
        >
          <Typography
            className="font-bold"
            sx={{ fontSize: { xs: "26px", md: "30px" }, mb: 3 }}
          >
            About Us
          </Typography>

          <Typography className="font-normal" sx={{ ...textStyle, mb: 3 }}>
            We are CSR Voice—journalists, investigators, and researchers
            committed to one belief: every action that builds a sustainable
            future deserves honest, rigorous reporting.
          </Typography>

          <Typography
            className="font-bold"
            sx={{ fontSize: { xs: "20px", md: "24px" }, mb: 2, mt: 4 }}
          >
            Our Mission
          </Typography>
          <Typography className="font-normal" sx={{ ...textStyle, mb: 3 }}>
            In an era of unprecedented corporate accountability, we go beyond
            what companies say they're doing. We investigate, verify, and report
            with unwavering commitment to truth. Because meaningful journalism
            demands more than press releases—it requires evidence, diverse
            perspectives, and independence.
          </Typography>

          <Typography
            className="font-bold"
            sx={{ fontSize: { xs: "20px", md: "24px" }, mb: 2, mt: 4 }}
          >
            Our Standards
          </Typography>
          <Typography className="font-normal" sx={{ ...textStyle, mb: 2 }}>
            <strong>Independence First.</strong> We answer to no political
            party, corporation, or ideology. Our analysis is driven by facts,
            not influence.
          </Typography>
          <Typography className="font-normal" sx={{ ...textStyle, mb: 2 }}>
            <strong>Every Voice Matters.</strong> From grassroots communities to
            corporate boardrooms, we ensure all stakeholders are
            heard—especially those often marginalised in business discourse.
          </Typography>
          <Typography className="font-normal" sx={{ ...textStyle, mb: 3 }}>
            <strong>Rigorous Verification.</strong> Our editorial team examines
            every piece of information before publication. Accuracy over speed.
            Context over convenience. Always.
          </Typography>

          <Typography
            className="font-bold"
            sx={{ fontSize: { xs: "20px", md: "24px" }, mb: 2, mt: 4 }}
          >
            Our Leadership
          </Typography>
          <Typography className="font-normal" sx={{ ...textStyle, mb: 3 }}>
            Under Editor-in-Chief Naveen S Garewal—an internationally acclaimed
            journalist with over four decades of experience—we maintain
            editorial standards that prioritise truth, balance, and
            comprehensive storytelling.
          </Typography>

          <Typography
            className="font-bold"
            sx={{ fontSize: { xs: "20px", md: "24px" }, mb: 2, mt: 4 }}
          >
            Our Coverage
          </Typography>
          <Typography className="font-normal" sx={{ ...textStyle, mb: 3 }}>
            We examine where corporate responsibility intersects with real
            impact: CSR and ESG (Environmental, Social, and Governance)
            initiatives, emerging social stocks, agriculture, water
            conservation, healthcare, environmental protection, education,
            disaster response, governance frameworks, and compliance. We
            investigate not just what companies do, but why they do it, who
            benefits, and what remains unaddressed.
          </Typography>

          <Typography
            className="font-bold"
            sx={{ fontSize: { xs: "20px", md: "24px" }, mb: 2, mt: 4 }}
          >
            Our Promise
          </Typography>
          <Typography className="font-normal" sx={{ ...textStyle, mb: 2 }}>
            As Unilever's former CEO Niall FitzGerald noted: "CSR is a
            hard-edged business decision... because it is good for our
            business." We explore this intersection of purpose and profit with
            honesty—celebrating genuine impact while scrutinising where
            commitments fall short.
          </Typography>
          <Typography className="font-normal" sx={{ ...textStyle, mb: 3 }}>
            In a world of managed communications and rapid misinformation, we
            serve as your critical filter. We deliver concise, comprehensive
            content with complete accuracy, ensuring you understand the real
            story behind corporate responsibility.
          </Typography>
          <Typography className="font-normal" sx={{ ...textStyle, mb: 4 }}>
            CSR Voice is your trusted source for news about India and global
            developments—informing, questioning, and contributing to a more
            transparent and accountable corporate landscape.
          </Typography>

          <Typography
            className="font-normal"
            sx={{ ...textStyle, fontStyle: "italic", mb: 1 }}
          >
            Designed, produced and maintained by CSR Voice
          </Typography>
          <Typography className="font-normal" sx={textStyle}>
            <strong>Editor-in-Chief:</strong> Naveen S Garewal (@naveengarewal)
          </Typography>
          <Typography className="font-normal" sx={textStyle}>
            <strong>Email:</strong>{" "}
            <a href="mailto:hello@csrvoice.com">hello@csrvoice.com</a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
